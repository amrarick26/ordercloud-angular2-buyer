import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { AppModule } from '../app.module';


@NgModule({
    declarations: [
        LoginFormComponent
    ],
    imports: [
        AppModule
    ],
    exports: [
        LoginFormComponent
    ]
})

export class LoginFormModule {}