import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { BuyerProduct, MeService } from "@ordercloud/angular-sdk";

import "rxjs/add/operator/catch";


@Injectable()
export class ProductResolve implements Resolve<BuyerProduct> {
    constructor(private meService: MeService) {}
    resolve(route: ActivatedRouteSnapshot) {
        return this.meService.GetProduct(route.params.id);
    }
}