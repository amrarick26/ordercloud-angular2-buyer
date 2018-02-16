import { Pipe, PipeTransform } from '@angular/core';
import { PriceSchedule } from '@ordercloud/angular-sdk';

@Pipe({
  name: 'priceCalculator'
})
export class PriceCalculatorPipe implements PipeTransform {

  transform(priceSchedule: PriceSchedule, quantity: number = 1): number {
    if (!quantity || quantity < 0) return priceSchedule.PriceBreaks[0].Price;
    const priceBreak = priceSchedule.PriceBreaks.reduce((prev, next) => {
      return (next.Quantity > prev.Quantity && next.Quantity <= quantity) ? next : prev;
    });
    return quantity * priceBreak.Price;
  }

}
