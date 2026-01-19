import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form-component/form-component';
import { TemplateForm } from './template-form/template-form';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent, TemplateForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-4');
}
