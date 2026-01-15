import { Component, signal } from '@angular/core';
import { Binding } from './binding/binding';

@Component({
  selector: 'app-root',
  imports: [Binding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
