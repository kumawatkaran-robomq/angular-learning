import { Component, Input } from '@angular/core';
import { ParentToChild } from './parent-to-child/parent-to-child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ParentToChild, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['karan', 'tushar', 'piyush', 'ronak'];
  name = 'Karan';
}
