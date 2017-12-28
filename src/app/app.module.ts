// core services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// third party services
import { CookieService } from 'angular2-cookie/services/cookies.service';

// app services
import { OrderCloudSDK } from './common/services/ordercloud-sdk/ordercloud-sdk.service';

// app components
import { AppComponent } from './app.component';
import { ProductBrowseComponent } from './product-browse/product-browse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBrowseComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {
        path: 'productBrowse',
        component: ProductBrowseComponent
      }, {
        path: 'home',
        component: HomeComponent
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ] ),
  ],
  providers: [
    CookieService,
    OrderCloudSDK
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
