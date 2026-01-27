import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  constructor(private auth: Auth,private router:Router) {}
  loginData = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isSubmitting = false;
  showPassword = false;
  showError = false;
  errorMessage = '';

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
    if (this.loginData.invalid) {
      this.loginData.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.showError = false;

    const { email, password } = this.loginData.value;

    this.auth.login(email!, password!).subscribe({
      next: (res: any) => {
        this.auth.setToken(res.token);
        this.isSubmitting = false;
        this.loginData.reset();
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showError = true;
        this.errorMessage = err.error?.message || 'Login failed';
        this.loginData.get('password')?.reset();
        console.log(this.isSubmitting);
      },
    });
  }
}
