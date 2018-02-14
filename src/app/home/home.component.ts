import { Component, OnInit, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config/app.config';
import { OcMeProductList } from '../common/services/ordercloud-sdk/ordercloud-sdk.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // TODO: This is a placeholder component
  // Find a good spot to include this.  Perhaps a module of it's own or included in a module called Static for static pages like this
  constructor( @Inject(APP_CONFIG) protected appConfig: AppConfig) {

  }

  ngOnInit() {

  }

}
