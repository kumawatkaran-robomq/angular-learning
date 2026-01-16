import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-pass',
  imports: [],
  templateUrl: './data-pass.html',
})
export class DataPass {
  username: string | null = '';
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get('name');
    // this.router.params.subscribe((params) => {
    //   this.username = params['name'];
    // });

    this.router.queryParams.subscribe((param) => {
      this.username = param['name'];
    });
  }
}
