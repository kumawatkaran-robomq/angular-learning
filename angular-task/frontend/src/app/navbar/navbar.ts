import { NgIf, Location } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.html',
})
export class Navbar {
  constructor(
    private auth: Auth,
    private router: Router,
    private loc: Location,
    private cdr: ChangeDetectorRef,
  ) {}
  token: string | null = null;
  userName = '';
  ngOnInit(): void {
    this.auth.token.subscribe((token) => {
      this.token = token;
      console.log("t: ",token);
      if (token) {
        this.auth.getUser().subscribe((res) => {
          this.userName = res?.rows[0]?.name;
          this.cdr.detectChanges();
        });
      }
    });
    console.log('token : ', this.token);
  }

  getPath() {
    return this.loc.path();
  }

  logout() {
    localStorage.clear();
    this.token = '';
    this.router.navigate(['/']);
  }
}
