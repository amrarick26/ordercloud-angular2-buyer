// core services
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// catalog components
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';


import { ProductResolve } from './product/product.resolve';
import { CurrentOrderResolve } from './product/order.resolve';

const routes: Routes = [
  { path: 'product/:id', 
    component: 
    ProductComponent, 
    resolve: {
      order: CurrentOrderResolve,
      product: ProductResolve
    }
  },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProductResolve, 
    CurrentOrderResolve
  ]
})
export class CatalogRoutingModule { }