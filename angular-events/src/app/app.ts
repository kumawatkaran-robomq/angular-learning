import { Component, input } from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  imports: [InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
