import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    console.log(args);
    return value * args[0];
  }
}
