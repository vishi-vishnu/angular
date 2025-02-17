import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements AfterContentInit{

  @Input() bookData!: { id: number, name: string, imageUrl: string, price: number, rating: number };

  //content child
  @ContentChild("bookName", { static: false }) bookName!: ElementRef;

  ngAfterContentInit(): void {
    setTimeout(() => {
      if (this.bookName) {
        console.log(this.bookName, 'hhh')
        this.bookName.nativeElement.style.color = 'red';
      }
    });
  }
  
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
