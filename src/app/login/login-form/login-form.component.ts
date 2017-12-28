import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { OcAutoValidate } from '../../common/services/oc-auto-validate/oc-auto-validate.service';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app.config';
import { OrderCloudSDK } from '../../common/services/ordercloud-sdk/ordercloud-sdk.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ocAutoValidate: OcAutoValidate,
    private orderCloudSDK: OrderCloudSDK,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) { }

  @Output() emitSetForm = new EventEmitter();

  appName: string;
  loginForm: FormGroup;
  formErrors: object;
  validationMessages: object;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: false
    });

    this.formErrors = {};
    this.ocAutoValidate.HandleValidationMessages(this.loginForm, this.formErrors);
  }

  login() {
    return this.orderCloudSDK.Auth.Login(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value,
      this.appConfig.clientID,
      this.appConfig.scope
    ).subscribe(
      response => {
        this.orderCloudSDK.SetToken(response.access_token);
        this.router.navigateByUrl('/home');
      },
      (ex: HttpErrorResponse) => {
        console.log(ex.error.error_description);
      }
      );
  }

  setForm(form: string) {
    this.emitSetForm.emit(form);
  }

}
