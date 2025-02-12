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
    textarea:'',

  };

  username='';

  message='Are you studying in ECE Dept?';

  changeMessage() {
    this.message = 'OKAY Your studying in ECE dept.';
  }
  changeMessage2() {
    this.message = 'So Your Not studying in ECE dept.';
  }

  updateUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  onSubmit(form: any) {
    console.log(form.value, 'useeeeeee');
  }
}
