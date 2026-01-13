import { Component, input } from '@angular/core';
import { InputComponent } from './input/input.component';
import { Form } from './form/form';
import { Condition } from './condition/condition';

@Component({
  selector: 'app-root',
  imports: [InputComponent, Form, Condition],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
