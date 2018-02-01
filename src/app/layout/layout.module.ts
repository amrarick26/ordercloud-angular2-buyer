import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
