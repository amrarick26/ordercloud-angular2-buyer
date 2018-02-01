import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APP_CONFIG, AppConfig } from '../../config/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {}

  ngOnInit() {
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
