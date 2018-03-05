import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import 'rxjs/add/operator/catch';

import { SwalComponent } from '@toverux/ngx-sweetalert2';
// import { SweetAlertOptions } from 'sweetalert2';

import { BuyerProduct, LineItemService, MeService, BuyerSpec, LineItem } from '@ordercloud/angular-sdk';
import { CurrentOrder } from './order.resolve';
import { DefaultAlertOptions } from '../../shared/shared.module';
import { JsonPipe } from '@angular/common';

@Component( {
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss' ],
    providers: [
        JsonPipe
    ]
} )
export class ProductComponent implements OnInit {
    product: BuyerProduct;
    productSpecs: BuyerSpec[] = [];
    lineTotal: number;
    order: CurrentOrder;
    form: FormGroup;

    get lineItem(): LineItem {
        return {
            ProductID: this.product.ID,
            Quantity: this.form.value.quantity,
            Specs: this.productSpecs.map( spec => {
                let value = this.form.value.specs[ spec.ID ];
                let selectedOption = spec.Options.find( o => o.ID === value );
                return {
                    SpecID: spec.ID,
                    OptionID: selectedOption ? selectedOption.ID : null,
                    Value: selectedOption ? selectedOption.Value : value
                }
            } )
        }
    }

    constructor(
        private route: ActivatedRoute,
        private meService: MeService,
        private lineItemService: LineItemService,
        private jsonPipe: JsonPipe
    ) {}

    ngOnInit() {
        this.form = new FormGroup( {} );

        this.product = this.route.snapshot.data.product;
        this.order = this.route.snapshot.data.order;

        if ( this.product.SpecCount ) {
            this.form.addControl('specs', new FormGroup( {} ))
            this.meService.ListSpecs( this.product.ID )
                .subscribe( list => {
                    this.productSpecs = list.Items.sort( ( a, b ) => {
                        return a.ListOrder - b.ListOrder
                    } )
                } );
        }
    }

    goToCheckout() {
        console.log( 'GO TO CHECKOUT!' );
    }

    addToCart() {
        if ( this.form.valid ) {
            if ( this.order ) {
                return this.lineItemService.Create( 'outgoing', this.order.ID, this.lineItem )
                .subscribe( 
                    lineItem => this.addToCartAlert(lineItem), 
                    error => this.addToCartError(error) 
                )
            }
        }
    }

    addToCartAlert( lineItem ): void {
        let html = this.product.Name + ' &#215; ' + this.form.value.quantity;
        lineItem.Specs.forEach( spec => {
            let productSpec = this.productSpecs.find(s => s.ID === spec.SpecID);
            html += spec.Value ? 
                (`<br><small><span class="text-muted">
                ${productSpec.Name}
                : </span><span class="text-primary">
                ${spec.Value || 'None'}
                </span></small>`) : '';
        } );
        new SwalComponent( {
            ...DefaultAlertOptions,
            type: 'success',
            title: 'Added To Cart!',
            confirmButtonText: 'Proceed to Checkout',
            html: html,
        } ).show();
    }

    addToCartError( ex: any ): void {
        new SwalComponent( { 
            ...DefaultAlertOptions,
            type: 'error',
            title: 'Oops!',
            html: `<pre class="text-left bg-dark text-light p-4 rounded-5">${this.jsonPipe.transform(ex)}</pre>`
        } ).show();
    }
}