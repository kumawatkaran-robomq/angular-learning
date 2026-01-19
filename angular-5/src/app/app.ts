import { Component, Input } from '@angular/core';
import { ParentToChild } from './parent-to-child/parent-to-child';
import { FormsModule } from '@angular/forms';
import { ChildToParent } from './child-to-parent/child-to-parent';
import { BuiltinPipe } from './builtin-pipe/builtin-pipe';

@Component({
  selector: 'app-root',
  imports: [ParentToChild, ChildToParent, BuiltinPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['karan', 'tushar', 'piyush', 'ronak'];
  name = 'Karan';
  city = '';
  handleCity(value: string) {
    this.city = value;
  }
}
