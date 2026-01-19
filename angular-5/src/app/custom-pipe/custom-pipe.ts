import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pipe',
  imports: [CurrencyConvertorPipe, CommonModule],
  templateUrl: './custom-pipe.html',
})
export class CustomPipe {
  money = 10;
}
