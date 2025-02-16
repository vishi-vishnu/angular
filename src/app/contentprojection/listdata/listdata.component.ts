import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent {
  @Input() bookData!: { id: number, name: string, imageUrl: string, price: number, rating: number };
}


// import { CommonModule } from '@angular/common';
// import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-listdata',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './listdata.component.html',
//   styleUrl: './listdata.component.css'
// })
// export class ListdataComponent implements OnInit, AfterViewInit {

   
//   @Input() data:{id: number, product: string }[] = []; //receiving the data from parent component

//   ngAfterViewInit(): void {
//     console.log(this.data, 'ngAfterViewInit')
//   }
//   ngOnInit(): void {
//     console.log(this.data, 'oninit')
//   }

// }
