// core services
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// third party services
import { CookieModule } from 'ngx-cookie';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderCloudModule } from '@ordercloud/angular-sdk';

// app services
import { OcAutoValidate } from './common/services/oc-auto-validate/oc-auto-validate.service';

// configs
import { APP_CONFIG, OcAppConfig } from './config/app.config';
import { OcSDKConfig } from './config/ordercloud-sdk.config';

// app components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ResetPasswordFormComponent } from './login/reset-password-form/reset-password-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login-component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordFormComponent } from './login/forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    HomeComponent,
    ForgotPasswordFormComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    // app modules
    AppRoutingModule,

    // third party modules
    NgbModule.forRoot(),
    CookieModule.forRoot(),
    OrderCloudModule.forRoot(OcSDKConfig)
  ],
  providers: [
    OcAutoValidate,
    { provide: APP_CONFIG, useValue: OcAppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
