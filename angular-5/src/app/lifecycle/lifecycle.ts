import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.html',
})
export class Lifecycle {
  constructor() {
    console.log('Constructor called');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy() {
    console.log('Component destroyed');
  }
}
