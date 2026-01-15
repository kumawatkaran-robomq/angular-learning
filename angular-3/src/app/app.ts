import { Component, signal } from '@angular/core';
import { Binding } from './binding/binding';
import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [Binding, Directives],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
