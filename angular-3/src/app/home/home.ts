import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
})
export class Home {
  constructor(private router: Router) {}
  goToProfile() {
    console.log('clicked');
    this.router.navigate(['/profile'], { queryParams: { name: 'karan' } });
  }
}
