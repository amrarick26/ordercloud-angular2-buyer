import { Component } from '@angular/core';
import { OrderCloudSDK } from './common/services/ordercloud-sdk/ordercloud-sdk.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentUser = {};
  myAddresses = {};
  
  constructor(private OrderCloudSDK: OrderCloudSDK) {}

  getMe() {
    return this.OrderCloudSDK.Me.Get()
      .subscribe( me => {
        this.currentUser = me;
        this.getMeAddresses();
      } )
  }

  getMeAddresses() {
    return this.OrderCloudSDK.Me.ListAddresses()
      .subscribe( addresses => {
        this.myAddresses = addresses;
        console.log('addresses', addresses);
      } );
  }
}
