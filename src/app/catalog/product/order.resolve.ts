import { Injectable } from "@angular/core";
import { Resolve} from '@angular/router';

import 'rxjs/add/operator/map';

import { MeService, Order, LineItem, Payment } from "@ordercloud/angular-sdk";

export interface CurrentOrder extends Order {
    LineItems: LineItem[];
    Payments: Payment[];
}

@Injectable()
export class CurrentOrderResolve implements Resolve<CurrentOrder> {
    constructor(private meService: MeService) {}
    resolve() {
        return this.meService.ListOrders({filters: {'Status':'Unsubmitted'}})
            .map(list => ({...{LineItems: [],Payments: []}, ...list.Items[0] }));
    }
}