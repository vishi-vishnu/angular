import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childpage',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="sendMessage()">Send Message</button>
  `,
  styles: ``
})
export class ChildpageComponent {
  @Output() messageEvent = new EventEmitter<number>();

  sendMessage() {
    this.messageEvent.emit(Math.random());
  }
}
