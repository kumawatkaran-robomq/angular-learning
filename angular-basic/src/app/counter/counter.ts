import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  selector: 'app-counter',
})
export class Counter {
  count = 0;
  increment() {
    this.count += 1;
  }
  decrememt() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
  reset() {
    this.count = 0;
  }
}
