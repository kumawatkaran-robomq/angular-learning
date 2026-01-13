import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {
  calculateSum(a: number, b: number) {
    console.log(a + b);
    this.anotherfun();
  }

  anotherfun() {
    console.log('another function called');
  }
}
