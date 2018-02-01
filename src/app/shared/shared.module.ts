// angular
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// 3rd party utils
import { CookieModule } from 'ngx-cookie';
import { ToastrModule } from 'ngx-toastr';

// 3rd party UI
import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

// OrderCloud
import { OrderCloudModule } from '@ordercloud/angular-sdk';
import { OcSDKConfig } from '../config/ordercloud-sdk.config';
import { OcAutoValidate } from './services/oc-auto-validate/oc-auto-validate.service';
import { APP_CONFIG, OcAppConfig } from '../config/app.config';
import { AppErrorHandler } from '../config/error-handling.config';

@NgModule({
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // 3rd party utils
    CookieModule.forRoot(),
    ToastrModule.forRoot(),

    // 3rd party UI
    TextMaskModule,
    NgbModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule,

    // OrderCloud
    OrderCloudModule.forRoot(OcSDKConfig),
  ],
  exports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // 3rd party utils
    CookieModule,
    ToastrModule,

    // 3rd party UI
    TextMaskModule,
    NgbModule,
    DynamicFormsCoreModule,
    DynamicFormsNGBootstrapUIModule,

    // OrderCloud
    OrderCloudModule,
  ],
  providers: [
    OcAutoValidate,
    { provide: APP_CONFIG, useValue: OcAppConfig },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class SharedModule { }
