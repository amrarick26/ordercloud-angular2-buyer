import { Component, AfterContentInit } from '@angular/core';
import { MeService, BuyerProduct } from '@ordercloud/angular-sdk';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements AfterContentInit {
  products: BuyerProduct[];
  constructor(private meService: MeService) { }

  ngAfterContentInit() {
    this.meService.ListProducts().subscribe(list => {
      this.products = list.Items;
    })
  }

}
