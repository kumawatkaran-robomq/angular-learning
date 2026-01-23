import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';
interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
}
@Component({
  selector: 'app-rest-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rest-form.html',
})
export class RestForm {
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {}
  users: User[] = [];
  user: User = { name: '', email: '', age: 0 };
  submit(data: User) {
    this.userService.postUser(data).subscribe((data) => {
      if (data) {
        this.user = { name: '', email: '', age: 0 };
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
      // this.users = Object.assign(data, this.users);
      // this.users = [...this.users];
      // this.users = this.users.slice();
      this.cdr.detectChanges();
      console.log('oninit: ', this.users);
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
