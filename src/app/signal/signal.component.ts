import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  a = 10;
  b = 20;
  c = this.a + this.b

  val1 = signal(5);
  val2 = signal(5);
  total = computed(() => this.val1() + this.val2());

  constructor(){
    effect(()=>{
      console.log(this.val1(), 'valuue1')
    })
  }
  updateVal(){
    console.log(this.c, this.total());
    this.b = 10;
    this.c = this.a + this.b
    console.log(this.c, this.total());

    // this.val1.set(10)
    this.val1.update(val => val + 5)
  }
}
