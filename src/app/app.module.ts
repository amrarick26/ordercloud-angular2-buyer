// core services
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// third party services
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// app services
import { OrderCloudSDK } from './common/services/ordercloud-sdk/ordercloud-sdk.service';

// app components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ResetPasswordFormComponent } from './login/reset-password-form/reset-password-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login-component';
import { OcAutoValidate } from './common/services/oc-auto-validate/oc-auto-validate.service';
import { HomeComponent } from './home/home.component';

// app config
import { APP_CONFIG, OcAppConfig } from './app.config';
import { ForgotPasswordFormComponent } from './login/forgot-password-form/forgot-password-form.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    HomeComponent,
    ForgotPasswordFormComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    OrderCloudSDK,
    OcAutoValidate,
    { provide: APP_CONFIG, useValue: OcAppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
