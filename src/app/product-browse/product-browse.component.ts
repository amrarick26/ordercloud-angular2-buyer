import { Component, OnInit } from '@angular/core';
import { OrderCloudSDK } from '../common/services/ordercloud-sdk/ordercloud-sdk.service';
import { OcMeProductList } from '../common/services/ordercloud-sdk/ordercloud-sdk.model';


@Component({
  selector: 'app-product-browse',
  templateUrl: './product-browse.component.html',
  styleUrls: ['./product-browse.component.scss']
})
export class ProductBrowseComponent implements OnInit {

  constructor(
    private orderCloudSDK: OrderCloudSDK
  ) { }

  productList: OcMeProductList;

  ngOnInit() {
    this.orderCloudSDK.Me.ListProducts()
      .subscribe((data: OcMeProductList) => {
        this.productList = data;
        console.log('these things', this.productList.Items);
      })
  }

}
