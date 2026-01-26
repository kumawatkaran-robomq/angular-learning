import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {

  constructor(private http:HttpClient){}
  loginData = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isSubmitting = false;
  showPassword = false;


  getEmail() {
    return this.loginData.get('email');
  }

  getPassword() {
    return this.loginData.get('password');
  }

  getEmailErrorMessage() {
    const emailControl = this.getEmail();
    if (!emailControl?.errors) return '';

    if (emailControl.errors['required']) {
      return 'Email is required';
    }
    if (emailControl.errors['pattern']) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  getPasswordErrorMessage() {
    const passwordControl = this.getPassword();
    if (!passwordControl?.errors) return '';

    if (passwordControl.errors['required']) {
      return 'Password is required';
    }
    if (passwordControl.errors['minlength']) {
      return 'Password must be at least 6 characters';
    }
    return '';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    this.isSubmitting = true;

  }
}
