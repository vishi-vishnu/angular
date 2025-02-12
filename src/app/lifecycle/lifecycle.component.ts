import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
  standalone:true,
  imports: [CommonModule, RouterModule],
})
export class LifecycleComponent {

}
