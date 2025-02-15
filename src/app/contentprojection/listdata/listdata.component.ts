import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listdata.component.html',
  styleUrl: './listdata.component.css'
})
export class ListdataComponent implements OnInit, AfterViewInit {

   
  @Input() data:{id: number, product: string }[] = [];

  ngAfterViewInit(): void {
    console.log(this.data, 'ngAfterViewInit')
  }
  ngOnInit(): void {
    console.log(this.data, 'oninit')
  }

}
