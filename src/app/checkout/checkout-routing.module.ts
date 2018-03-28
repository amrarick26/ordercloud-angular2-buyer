// core services
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// catalog components
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule { }