import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
})
export class Loop {
  users = [
    { name: 'Karan Kumawat', email: 'karan.kumawat@example.com' },
    { name: 'Aarav Sharma', email: 'aarav.sharma@example.com' },
    { name: 'Neha Verma', email: 'neha.verma@example.com' },
    { name: 'Rohit Singh', email: 'rohit.singh@example.com' },
    { name: 'Priya Patel', email: 'priya.patel@example.com' },
  ];

  students = ['alice', 'bob', 'charlie', 'david', 'eva', 'frank', 'grace', 'hannah'];
}
