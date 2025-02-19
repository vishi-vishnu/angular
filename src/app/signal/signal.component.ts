import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  
  a = 10;
  b = 20;
  c = this.a + this.b;

  val1 = signal(5);
  val2 = signal(5);
  total = computed(() => this.val1() + this.val2());

  studentCount = signal(2500);
  gpa1 = signal(7.5);
  gpa2 = signal(8.2);
  avgGPA = computed(() => ((this.gpa1() + this.gpa2()) / 2).toFixed(2));

  events = signal([
    "Hackathon Registration Open",
    "Guest Lecture on AI - Friday",
    "Cultural Fest - Next Week"
  ]);

  constructor() {
    effect(() => {
      console.log(`Val1 updated: ${this.val1()}`);
    });

    setInterval(() => {
      this.studentCount.update(count => count + Math.floor(Math.random() * 5));
    }, 5000);

    setInterval(() => {
      this.gpa1.set(6.5 + Math.random() * 2);
      this.gpa2.set(7.0 + Math.random() * 2);
    }, 8000);
  }

  updateVal() {
    console.log(`Total Before: ${this.c}, ${this.total()}`);
    this.b = 10;
    this.c = this.a + this.b;
    this.val1.update(val => val + 5);
    console.log(`Total After: ${this.c}, ${this.total()}`);
  }

  addEvent() {
    const newEvent = `New Event: Seminar on ${new Date().toLocaleDateString()}`;
    this.events.update(e => [newEvent, ...e]);
  }
}
