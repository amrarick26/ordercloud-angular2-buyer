import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { OcMatchFieldsValidator } from '../../common/validators/oc-match-fields/oc-match-fields';
import 'rxjs/add/operator/map';
import { OcAutoValidate } from '../../common/services/oc-auto-validate/oc-auto-validate.service';
import { PasswordResetService } from '@ordercloud/angular-sdk';
import { APP_CONFIG, AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private ocForms: OcAutoValidate,
    private passwordResetService: PasswordResetService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) { }

  @Output() emitSetForm = new EventEmitter();

  resetPasswordForm: FormGroup;
  formErrors: object;

  ngOnInit(): void {
    this.initForm();
  }

  resetPassword() {
    const resetRequest = {
      ClientID: this.appConfig.clientID,
      Username: this.resetPasswordForm.get('username').value,
      Password: this.resetPasswordForm.get('passwordGroup.password').value
    };
    this.passwordResetService.ResetPasswordByVerificationCode(
      this.resetPasswordForm.get('verificationCode').value,
      resetRequest
    ).subscribe(
      () => {
        this.setForm('login');
      },
      error => {
        throw error;
      }
      );
  }

  setForm(form: string) {
    this.emitSetForm.emit(form);
  }

  initForm() {
    this.resetPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      verificationCode: ['', Validators.required],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: OcMatchFieldsValidator('password', 'confirmPassword') })
    });

    this.formErrors = {};
    const messageOverrides = {
      ocMatchFields: 'Passwords do not match'
    };
    this.ocForms.HandleValidationMessages(this.resetPasswordForm, this.formErrors, messageOverrides);
  }

}
