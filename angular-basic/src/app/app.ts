import { Component } from '@angular/core';
import { Component1 } from './component1/component1';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Component1, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Karan';
}
