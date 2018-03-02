import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { BuyerSpec } from '@ordercloud/angular-sdk';

@Component({
  selector: 'product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.scss']
})
export class ProductSpecComponent implements OnInit {
  @Input('parent') form: FormGroup;
  @Input() spec: BuyerSpec;
  default?: string;
  validators?: ValidatorFn[] = [];

  constructor() { }

  ngOnInit() {
    this.default = this.spec.DefaultOptionID || this.spec.DefaultValue;
    if (this.spec.Required) this.validators.push(Validators.required);
    this.form.addControl(this.spec.ID, new FormControl((this.spec.DefaultOptionID || this.spec.DefaultValue), this.validators));
  }

}
