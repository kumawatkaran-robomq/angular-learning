import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-component.html',
})
export class FormComponent {
  name = new FormControl();
  password = new FormControl();
  display = false;
  submit() {
    if (this.name && this.password) this.display = true;
  }
  setValue() {
    this.name.setValue('Karan');
    this.password.setValue('Password#123');
  }

  profileData = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password1: new FormControl('', [Validators.required, Validators.maxLength(6)]),
  });

  onSubmit() {
    console.log(this.profileData.value['firstname']);
    console.log(this.profileData.value['email']);
    console.log(this.profileData.value['password1']);
  }
}
