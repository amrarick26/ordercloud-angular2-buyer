import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { OcAuthResponse, OcMeCategoryList, OcMeProduct, OcMeProductList } from './ordercloud-sdk.model';
import { Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import * as _ from 'lodash';

@Injectable()
export class OrderCloudSDK {
  private authurl = 'https://auth.ordercloud.io/oauth/token';
  private apiurl = 'https://api.ordercloud.io/v1';
  private cookiePrefix = this.appConfig.appname.replace(/ /g, '_').toLowerCase();
  private cookieName = this.cookiePrefix + '_token';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) { }

  Auth = {
    Login: (username: string, password: string, clientID: string, scope: string[] | string) => {
      if (typeof scope !== 'string') {
        scope = scope.join(' ');
      }
      const body = `grant_type=password&scope=${scope}&client_id=${clientID}&username=${username}&password=${password}`;
      return this.http
        .post<OcAuthResponse>(this.authurl, body, {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        });
    }
  };

  Me = {
    Get: () => {
      return this.callApi('get', '/me');
    },

    ListCategories: (options?: object): Observable<OcMeCategoryList> => {
      return this.callApi('get', '/me/categories', options);
    },

    ListProducts: (options?: object): Observable<OcMeProductList> => {
      return this.callApi('get', '/me/products', options);
    },

    GetProduct: (productID: string): Observable<OcMeProduct> => {
      return this.callApi('get', `/me/products/${productID}`);
    },
  };

  SetToken(token: string) {
    this.cookieService.put(this.cookieName, token);
  }

  GetToken() {
    return this.cookieService.get(this.cookieName);
  }

  RemoveToken() {
    this.cookieService.remove(this.cookieName);
  }

  private callApi(method: string, route: string, options?: object, body?: object) {

    // build up query parameters
    const params = new HttpParams();
    if (options) {
      _.forOwn(options, (val, key) => {
        params.append(key, val);
      });
    }

    // get and delete don't have a body
    if (method === 'get' || method === 'delete') {
      return this.http[method](this.apiurl + route, {
        params: params,
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.GetToken())
      });
    } else {
      return this.http[method](this.apiurl + route, body, {
        params: params,
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.GetToken())
      });
    }
  }
}
