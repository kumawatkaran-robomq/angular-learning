import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'',component:Home},
  {path: 'login',component: Login},
  {path:'signup',component:Signup}

];
