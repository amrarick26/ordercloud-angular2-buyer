import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../../config/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appname: string;
  constructor(
    private router: Router,
    @Inject(APP_CONFIG) protected appConfig: AppConfig
  ) { }

  ngOnInit() {
    this.appname = this.appConfig.appname;
  }

  search() {
    alert('Search was hit!');
  }

  showHeader() {
    let hiddenRoutes = [
      '/login',
      '/register',
      '/forgot-password',
      '/reset-password'
    ];
    return !hiddenRoutes.includes(this.router.url);
  }

}
