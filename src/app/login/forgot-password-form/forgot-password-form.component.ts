import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OcAutoValidate } from '../../common/services/oc-auto-validate/oc-auto-validate.service';
import { PasswordResetService } from '@ordercloud/angular-sdk';
import { APP_CONFIG, AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ocAutoValidate: OcAutoValidate,
    private passwordResetService: PasswordResetService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) { }

  @Output() emitSetForm = new EventEmitter();

  forgotPasswordForm: FormGroup;
  formErrors: object;

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.formErrors = {};
    this.ocAutoValidate.HandleValidationMessages(this.forgotPasswordForm, this.formErrors);
  }

  forgotPassword() {
      this.passwordResetService.SendVerificationCode({
        Email: this.forgotPasswordForm.get('email').value,
        ClientID: this.appConfig.clientID
      }).subscribe(
        () => {
        this.setForm('reset-password');
      }, error => {
        throw error;
      });
    }

    setForm(form: string) {
      this.emitSetForm.emit(form);
    }
}
