import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  a = 10;
  b = 20;
  c = this.a + this.b;

  val1 = signal(5);
  val2 = signal(5);
  total = computed(() => this.val1() + this.val2());

  balance = signal(100);

  constructor() {
    effect(() => {
      console.log(`Val1 updated: ${this.val1()}`);
    });
    effect(() => {
      console.log("Phone: Balance updated to $", this.balance());
    });
    effect(() => {
      console.log("Email: Balance updated to $", this.balance());
    });
    effect(() => {
      console.log("Financial balance: Balance updated to $", this.balance());
    });

    this.balance.set(150);
    this.balance.update((value: number) => value- 50);
  }

  updateVal() {
    console.log(`Total Before: ${this.c}, ${this.total()}`);
    this.b = 10;
    this.c = this.a + this.b;
    this.val1.update(val => val + 5);
    console.log(`Total After: ${this.c}, ${this.total()}`);
  }
}
