import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.html',
})
export class ChildToParent {
  city = 'aburoad';
  @Output() getCity = new EventEmitter();

  ngOnInit(): void {
    this.getCity.emit(this.city);
  }
}
// child tag me defined emmiter lagana h taki hum waha pe data emit kar sake and then parent comp oose event k through catch kar lega
