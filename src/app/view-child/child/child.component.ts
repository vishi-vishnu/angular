import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child works!
    </p>
  `,
  styles: ``
})
export class ChildComponent {
  toArray(): any {
    throw new Error('Method not implemented.');
  }

  public valueCount:number = 0;

  incremnet(){
    this.valueCount++
  }
  decrement(){
    this.valueCount--
  }
}
