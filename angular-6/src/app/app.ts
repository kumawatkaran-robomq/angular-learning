import { Component, signal } from '@angular/core';
import { AttributeBinding } from './attribute-binding/attribute-binding';

@Component({
  selector: 'app-root',
  imports: [AttributeBinding],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-6');
}
