import { Component } from '@angular/core';
import { ParentToChild } from './parent-to-child/parent-to-child';
import { FormsModule } from '@angular/forms';
import { ChildToParent } from './child-to-parent/child-to-parent';
import { BuiltinPipe } from './builtin-pipe/builtin-pipe';
import { CustomPipe } from './custom-pipe/custom-pipe';
import { Lifecycle } from './lifecycle/lifecycle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ParentToChild, ChildToParent, BuiltinPipe, CustomPipe, FormsModule, Lifecycle, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['karan', 'tushar', 'piyush', 'ronak'];
  name = 'Karan';
  city = '';
  count = 0;
  handleCity(value: string) {
    this.city = value;
  }
}
