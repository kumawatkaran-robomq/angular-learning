import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  imports: [],
  templateUrl: './condition.html',
})
export class Condition {
  toggel = true;
  setToggle() {
    this.toggel = !this.toggel;
  }
  color = '';
  changeColor(val: string) {
    this.color = val;
  }
}
