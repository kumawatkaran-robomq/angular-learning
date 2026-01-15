import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Signup } from './signup/signup';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'about', component: About },
  { path: 'signup', component: Signup },
];
