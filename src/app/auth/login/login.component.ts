// angular
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// 3rd party
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';

// ordercloud
import { AuthService, TokenService } from '@ordercloud/angular-sdk';
import { APP_CONFIG, AppConfig } from '../../config/app.config';

// login form
import { LOGIN_MODEL, LOGIN_LAYOUT } from './login.constants';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel: DynamicFormControlModel[] = LOGIN_MODEL;
  formLayout: DynamicFormLayout = LOGIN_LAYOUT;
  formGroup: FormGroup;

  constructor(
    private formService: DynamicFormService,
    private ocAuthService: AuthService,
    private ocTokenService: TokenService,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig) {

  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onSubmit() {
    this.ocAuthService.Login(
      this.formGroup.get('username').value,
      this.formGroup.get('password').value,
      this.appConfig.clientID,
      this.appConfig.scope
    ).subscribe(
      response => {
        // TODO: check this.formGroup.get('rememberMe').value to see if we should store a refresh token
        this.ocTokenService.SetAccess(response.access_token);
        this.router.navigateByUrl('/home');
      },
      (ex) => {
        throw ex;
      }
      );
  }
}
