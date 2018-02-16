import { Component, Input, OnInit } from '@angular/core';
import { BuyerProduct, PriceBreak } from '@ordercloud/angular-sdk';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PriceCalculatorPipe } from '../price-calculator.pipe';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
  providers: [
    PriceCalculatorPipe
  ]
})
export class ProductQuantityComponent implements OnInit {
  @Input('parent') form: FormGroup;
  @Input() product: BuyerProduct;
  @Input() total?: number;

  priceBreaks: PriceBreak[];
  restricted: boolean;
  multiplier: number;
  min: number = 1;
  max?: number;

  constructor(private priceCalculator: PriceCalculatorPipe) { }

  ngOnInit() {
    const ps = this.product.PriceSchedule;
    
    this.multiplier =   this.product.QuantityMultiplier;
    this.priceBreaks =  ps.PriceBreaks;
    this.restricted =   ps.RestrictedQuantity;
    this.min =          ps.MinQuantity;
    this.max =          ps.MaxQuantity;

    this.form.addControl('quantity', new FormControl(this.min, [Validators.required, Validators.max(this.max), Validators.min(this.min)]));
    this.handleQuantityChange();
  }

  handleQuantityChange() {
    const quantityInput = this.form.get('quantity');

    let quantity = quantityInput.value;
    if (quantityInput.invalid) quantity = quantityInput.errors.min ? this.min : this.max;
    
    this.total = this.priceCalculator.transform(this.product.PriceSchedule, quantity);
  }
}
