import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Signup } from './signup/signup';
import { DataPass } from './data-pass/data-pass';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login, data: { data: 'this data is all about Login section' } },
  { path: 'about', component: About },
  { path: 'signup', component: Signup },
  { path: 'profile/:name', component: DataPass },
  { path: 'profile', component: DataPass },
];
