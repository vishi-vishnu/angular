import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruitdata',
  imports: [CommonModule],
  templateUrl: './fruitdata.component.html',
  styleUrl: './fruitdata.component.css'
})
export class FruitdataComponent {
  // @Input() bookData!: { id: number, name: string, imageUrl: string, price: number, rating: number };
  @Input() fruitData!: {id:number, name:string , imageUrl:string, price:number,taste:number}
}
