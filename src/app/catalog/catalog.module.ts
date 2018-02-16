import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductQuantityComponent } from './product/product-quantity/product-quantity.component';
import { PriceCalculatorPipe } from './product/price-calculator.pipe';
import { ProductSpecComponent } from './product/product-spec/product-spec.component';

@NgModule({
  imports: [
    TreeModule,
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [
    CategoryTreeComponent, 
    ShopComponent, 
    ProductComponent, 
    ProductQuantityComponent,
    PriceCalculatorPipe,
    ProductSpecComponent
  ]
})
export class CatalogModule { }
