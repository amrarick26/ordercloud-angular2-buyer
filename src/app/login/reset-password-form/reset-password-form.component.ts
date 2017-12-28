import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OcMatchFieldsValidator } from '../../common/validators/oc-match-fields/oc-match-fields';
import 'rxjs/add/operator/map';
import { OcAutoValidate } from '../../common/services/oc-auto-validate/oc-auto-validate.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ocForms: OcAutoValidate) { }

  resetPasswordForm: FormGroup;
  formErrors: object;

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: OcMatchFieldsValidator('password', 'confirmPassword') })
    });

    this.formErrors = {};
    const messageOverrides = {
      ocMatchFields: 'Passwords do not match'
    };
    this.ocForms.HandleValidationMessages(this.resetPasswordForm, this.formErrors, messageOverrides);
  }



  resetPassword() {

  }

}
