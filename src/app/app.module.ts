// core services
import { NgModule } from '@angular/core';

// 3rd party
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// shared module
import { SharedModule } from './shared/shared.module';

// app modules
import { AuthModule } from './auth/auth.module';

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
