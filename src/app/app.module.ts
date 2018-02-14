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

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

// app config
import { APP_CONFIG, OcAppConfig } from './app.config';
import { ForgotPasswordFormComponent } from './login/forgot-password-form/forgot-password-form.component';
import { NavComponent } from './nav/nav.component';
import { ProductBrowseComponent } from './product-browse/product-browse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    HomeComponent,
    ForgotPasswordFormComponent,
    NavComponent,
    ProductBrowseComponent,
  ],
  imports: [
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
