import { Component, signal } from '@angular/core';
import { AttributeBinding } from './attribute-binding/attribute-binding';
import { Debouncer } from './debouncer/debouncer';

@Component({
  selector: 'app-root',
  imports: [AttributeBinding, Debouncer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-6');
}
