import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipe',
  imports: [CommonModule],
  templateUrl: './builtin-pipe.html',
})
export class BuiltinPipe {
  book = 'subtle art of not giving fu*k';
  money = 10;
}
