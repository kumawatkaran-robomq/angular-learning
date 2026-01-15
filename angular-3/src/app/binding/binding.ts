import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
})
export class Binding {
  namesList: string[] = [];
  name = '';

  add() {
    if (this.name.length > 0) {
      this.namesList.push(this.name);
      this.name = '';
    }
  }
}
