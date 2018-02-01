// core services
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// auth components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// auth routing
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent
  ]
})
export class AuthModule { }
