import { Component, signal } from '@angular/core';
import { Binding } from './binding/binding';
import { Directives } from './directives/directives';
import { Routing } from './routing/routing';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Binding, Directives, Routing, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
