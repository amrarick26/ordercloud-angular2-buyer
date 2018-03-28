import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  imports: [
    SharedModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CheckoutModule { }