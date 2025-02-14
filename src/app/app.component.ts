import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VISHNU';
  college = 'KLN College of Engineering!';
  imageUrl =
    'https://www.shutterstock.com/image-photo/group-students-master-tablet-laptop-600nw-2347371743.jpg';
  imageUrl2 =
    'https://www.shutterstock.com/image-photo/group-students-master-tablet-laptop-600nw-2347371743.jpg';
  department = '';
  isDisabled = false;
  textColor = 'blue';
  isChecked = false;
  isError = true;
  dynamicClass = 'highlight';
  isHighlighted = false;

  message = 'Are You Studying ECE Department?';

  username = '';

  changeMessage() {
    this.message = 'OKAY Your studying in ECE dept.';
  }
  changeMessage2() {
    this.message = 'NOW Your Not studying in ECE dept.';
  }

  updateUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
}
