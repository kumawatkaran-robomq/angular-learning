import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  e = '';
  key = '';
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.e = 'input value = ' + input.value;
  }
  onFocus() {
    this.e = 'Element gained focus';
  }
  onFocusout() {
    this.e = 'Element lost focus';
  }
  onKeyUp() {
    this.key = 'Key relesed';
  }
  onKeyDown() {
    this.key = 'Key pressed';
  }
  onEnter() {
    this.key = 'enter clicked';
  }
  onCopy() {
    this.e = 'Text copied';
  }
  onPaste() {
    alert('Text pasted');
  }
}
