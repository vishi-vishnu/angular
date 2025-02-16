import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FruitdataComponent } from './fruitdata/fruitdata.component';

@Component({
  selector: 'app-library',
  imports: [CommonModule,FruitdataComponent],
  standalone: true,
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  public fruits = [
    {id:1, name: "Apple" , imageUrl:"https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D", price: 200, taste: 4.5},
    {id:2, name: "Orange" , imageUrl:"https://media.istockphoto.com/id/899238622/photo/tangerine-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=7IfhtidO1dFHBIKDnMRCHeTtK5i8OHa3Kpjr8z5DbnM=", price: 159, taste: 4},
    {id:3, name: "Jack fruit" , imageUrl:"https://media.istockphoto.com/id/1326743665/photo/jackfruit-with-green-leaf-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=i4bsDbRr2HEZro2_wlTsJFjqZLkeJoh-OH8-70uZeOE=", price: 199, taste: 4.2},
    {id:4, name: "Grapes" , imageUrl:"https://media.istockphoto.com/id/1130230871/photo/bunch-of-red-and-white-grapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=mmCGmeQEtq_HjxQkZqSFEEhB5gVK_AsMi8hexcdAprk=", price: 299, taste: 4.7},
    {id:5, name: "Mango" , imageUrl:"https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ298ZW58MHx8MHx8fDA%3D", price: 179, taste: 4.8},
    {id:6, name: "strawberry" , imageUrl:"https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D", price: 299, taste: 4.3},
  ]
}
