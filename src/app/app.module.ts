// core services
import { NgModule } from '@angular/core';

// 3rd party
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// shared module
import { SharedModule } from './shared/shared.module';

// app modules
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { CatalogModule } from './catalog/catalog.module';
import { CheckoutModule } from './checkout/checkout.module';

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent    
  ],
  imports: [
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    CatalogModule,
    CheckoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
