import { Component, input } from '@angular/core';
import { InputComponent } from './input/input.component';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [InputComponent, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
