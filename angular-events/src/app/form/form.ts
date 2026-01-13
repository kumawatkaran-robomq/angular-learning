import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
})
export class Form {
  name = '';
  age = 0;
  display = '';
  onInputName(event: Event) {
    let name = event.target as HTMLInputElement;
    this.name = name.value;
  }
  onInputAge(val: string) {
    // let age = event.target as HTMLInputElement;
    // this.age = Number(age.value);
    this.age = Number(val);
  }
  submit() {
    this.display = `My name is ${this.name} and ${this.age}`;
  }
}
