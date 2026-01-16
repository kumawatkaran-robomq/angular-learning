import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form-component/form-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-4');
}
