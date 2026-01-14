import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
})
export class Signal {
  normalVar = 10;
  signalVar = signal(20);

  // Writable signal
  data = signal<number | string>(23);
  changedata() {
    console.log('Data');
    this.data.set(35);
    console.log(this.data());
    this.data.set('hello');
    console.log(this.data());
    this.data.set('2' + 7);
    console.log(this.data());
  }

  data1: WritableSignal<number | string> = signal(2);
  changedata1() {
    this.data1.set('valuechange');
  }

  // readonly computed signal
  a = signal(10);
  b = signal(20);
  c = computed<number>(() => this.a() + this.b());
  changeC() {
    // this.c.set() //Property 'set' does not exist on type 'Signal<number>'.ts(2339)
  }
  constructor() {
    effect(() => {
      // "effect" that will be scheduled & executed whenever the signals that it reads changes.
      console.log('nv ', this.normalVar);
      console.log('sv ', this.signalVar());
    });
  }
}
