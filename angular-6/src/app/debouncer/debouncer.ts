import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-debouncer',
  imports: [],
  templateUrl: './debouncer.html',
})
export class Debouncer {
  msg = '';
  debounceMsg = signal('');
  time: any;

  inputChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;

    this.msg = val;

    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.debounceMsg.set(val);
      console.log(val);
    }, 400);
  }
}
