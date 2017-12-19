// core services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// third party services
import { CookieService } from 'angular2-cookie/services/cookies.service';

// app services
import { OrderCloudSDK } from './common/services/ordercloud-sdk/ordercloud-sdk.service';

// app components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    OrderCloudSDK
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
