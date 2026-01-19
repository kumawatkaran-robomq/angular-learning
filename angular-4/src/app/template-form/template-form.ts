import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface user {
  name: string;
  email: string;
  password: string;
  gender: string;
}

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.html',
})
export class TemplateForm {
  userData: user;
  constructor() {
    this.userData = { name: '', email: '', password: '', gender: '' };
  }
  onSubmit(val: user) {
    console.log(val);
    this.userData = val;
  }
}
