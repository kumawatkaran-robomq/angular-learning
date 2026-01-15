import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgFor, FormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.html',
})
export class Directives {
  users = ['karan', 'ankit', 'rahul', 'sonam', 'deepak'];
  time = signal(0);
  intervalId: any = null;
  color = '';
  constructor() {
    effect(() => {
      console.log(this.time());
    });
  }
  startFunc() {
    if (this.intervalId) return; // This avoids creating multiple intervals accidentally.
    this.intervalId = setInterval(() => {
      this.time.set(Date.now());
    }, 100);
  }
  stopFunc() {
    if (!this.intervalId) return; //This avoids creating multiple intervals accidentally.
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetFunc() {
    this.time.set(0);
  }
  changeColor(c: string) {
    console.log(c);
    this.color = c;
  }
}
