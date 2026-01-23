import { Component, signal } from '@angular/core';
import { RestForm } from './rest-form/rest-form';

@Component({
  selector: 'app-root',
  imports: [RestForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('REST App');
}
