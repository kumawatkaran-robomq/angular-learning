import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.html',
})
export class Lifecycle {
  @Input() name!: string;
  constructor() {
    console.log('name in constructor', this.name);
    console.log('Constructor called');
  }
  ngOnInit() {
    console.log('name in ngOnInit', this.name);
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy() {
    console.log('Component destroyed');
  }
}

// 1. Component ka object banta hai
//    → constructor()
// 2. Parent se @Input values aati hain
//    → name = 'Karan'

// 3. Component initialize hota hai
//    → ngOnInit()
