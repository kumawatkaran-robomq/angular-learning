import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, NgIf,RouterLink],
  templateUrl: './signup.html',
})
export class Signup {
  constructor (private auth:Auth,private router:Router){};
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
    if (this.signupData.invalid) {
      this.signupData.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const { name,email, password } = this.signupData.value;

    this.auth.signup(name!,email!, password!).subscribe({
      next: (res: any) => {
        this.auth.setToken(res.token);
        this.isSubmitting = false;
        this.signupData.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.log(this.isSubmitting);
      },
    });
  }
}
