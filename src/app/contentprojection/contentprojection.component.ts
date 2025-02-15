import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListdataComponent } from './listdata/listdata.component';

@Component({
  selector: 'app-contentprojection',
  standalone: true,
  imports: [CommonModule, ListdataComponent],
  templateUrl: './contentprojection.component.html',
  styleUrl: './contentprojection.component.css'
})
export class ContentprojectionComponent {

  public data1 = [
    { id: 1, product: 'Motorola' },
    { id: 2, product: 'Samsung' }
  ];
}
