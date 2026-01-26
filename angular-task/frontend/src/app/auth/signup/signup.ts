import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, NgIf,RouterLink],
  templateUrl: './signup.html',
})
export class Signup {
  signupData = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isSubmitting = false;
  showPassword = false;

  getName() {
    return this.signupData.get('name');
  }

  getEmail() {
    return this.signupData.get('email');
  }

  getPassword() {
    return this.signupData.get('password');
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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

  submit() {
    this.isSubmitting = true;

    setTimeout(() => {
      console.log('Signup Data:', {
        name: this.signupData.value.name,
        email: this.signupData.value.email,
        password: this.signupData.value.password,
      });

      this.isSubmitting = false;
      this.signupData.reset();
    }, 1500);
  }
}
