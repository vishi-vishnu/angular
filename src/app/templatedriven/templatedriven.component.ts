import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css',
})
export class TemplatedrivenComponent {
  user = {
    fName: '',
    lName: '',
    email: '',
  };

  onSubmit(form: any) {
    console.log(form.value, 'useeeeeee');
  }
}
