import { Component, OnInit } from '@angular/core';
import { OrderCloudSDK } from '../common/services/ordercloud-sdk/ordercloud-sdk.service';

@Component({
  selector: 'app-product-browse',
  templateUrl: './product-browse.component.html',
  styleUrls: ['./product-browse.component.scss']
})
export class ProductBrowseComponent implements OnInit {

  constructor(private OrderCloudSDK: OrderCloudSDK) { }

  products: {};

  ngOnInit() {
    return this.OrderCloudSDK.Me.ListProduct()
      .subscribe( products => {
        this.products = products;
    } );
  }

}
