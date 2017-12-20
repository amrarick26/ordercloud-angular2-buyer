// core services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

// third party services
import { CookieService } from 'angular2-cookie/services/cookies.service';

// app services
import { OrderCloudSDK } from './common/services/ordercloud-sdk/ordercloud-sdk.service';

// app components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    OrderCloudSDK
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
