import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListdataComponent } from './listdata/listdata.component';

@Component({
  selector: 'app-contentprojection',
  standalone: true,
  imports: [CommonModule, ListdataComponent],
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent {
  public books = [
    { id: 1, name: 'Atomic Habits', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bBd4_9AxFgcbEmdG5C8tooGWIALdL8_icgvyRQ4rWa_jmVdEBdOzMUGoGjQvcRlzXwM&usqp=CAU', price: 499, rating: 4.8 },
    { id: 2, name: 'The 5 AM Club', imageUrl: 'https://m.media-amazon.com/images/I/712VrOZ60zL.jpg', price: 350, rating: 4.5 },
    { id: 3, name: 'Rich Dad Poor Dad', imageUrl: 'https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg', price: 399, rating: 4.7 },
    { id: 4, name: 'Deep Work', imageUrl: 'https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg', price: 450, rating: 4.6 },
    { id: 5, name: 'The Psychology of Money', imageUrl: 'https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg', price: 430, rating: 4.9 },
    { id: 6, name: 'The Alchemist', imageUrl: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg', price: 299, rating: 4.3 }
  ];
}

// export class ContentprojectionComponent {
//   public data1 = [
//     { id: 1, product: 'Motorola' },
//     { id: 2, product: 'Samsung' }
//   ];
// }
