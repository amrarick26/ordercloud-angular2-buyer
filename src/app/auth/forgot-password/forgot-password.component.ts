// angular
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// 3rd Party
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

// ordercloud
import { PasswordResetService } from '@ordercloud/angular-sdk';
import { APP_CONFIG, AppConfig } from '../../config/app.config';

// forgot password form
import { FORGOT_PASSWORD_MODEL, FORGOT_PASSWORD_LAYOUT } from './forgot-password.constants';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formModel: DynamicFormControlModel[] = FORGOT_PASSWORD_MODEL;
  formLayout: DynamicFormLayout = FORGOT_PASSWORD_LAYOUT;
  formGroup: FormGroup;

  constructor(
    private formService: DynamicFormService,
    private passwordResetService: PasswordResetService,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig) {

  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onSubmit() {
    this.passwordResetService.SendVerificationCode({
      Email: this.formGroup.get('email').value,
      ClientID: this.appConfig.clientID
    }).subscribe(
      () => {
        this.router.navigateByUrl('/reset-password');
      }, error => {
        throw error;
      });
  }
}
