import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../config/app.config';
import { AuthService, TokenService } from '@ordercloud/angular-sdk';
import { HttpErrorResponse } from '@angular/common/http/src/response';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ocAuthService: AuthService,
    private ocTokenService: TokenService,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) { }

  @Output() emitSetForm = new EventEmitter();

  appName: string;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
      rememberMe: false
    });
  }

  login() {
    return this.ocAuthService.Login(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value,
      this.appConfig.clientID,
      this.appConfig.scope
    ).subscribe(
      response => {
        this.ocTokenService.SetAccess(response.access_token);
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
