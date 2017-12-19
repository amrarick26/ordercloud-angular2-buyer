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
  
  constructor(private OrderCloudSDK: OrderCloudSDK) {}

  login() {
    return this.OrderCloudSDK.Auth.Login('', '', 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' , '')
      .subscribe( res => {
        this.OrderCloudSDK.SetToken( res.access_token )
      } );
  }

  getMe() {
    return this.OrderCloudSDK.Me.Get()
      .subscribe( me => {
        this.currentUser = me
      } )
  }
}
