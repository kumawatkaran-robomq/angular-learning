import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  imports: [],
  templateUrl: './parent-to-child.html',
})
export class ParentToChild {
  @Input() users: string[] | undefined;
  @Input() name: string | undefined;
}
