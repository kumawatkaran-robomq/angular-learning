import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: ActivatedRoute) {}
  data: string | null = '';
  ngOnInit(): void {
    this.router.data.subscribe((params) => {
      console.log(params);
      this.data = params['data'];
    });
  }
}
