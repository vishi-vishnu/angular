import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{

    // @ViewChild('title') title! : ElementRef;
    @ViewChildren('title') title! : QueryList<any>;
    @ViewChild(ChildComponent) child! : ChildComponent;

    ngAfterViewInit(): void {
         console.log('view child', this.title);
         console.log(this.child.valueCount);
         this.title.first.nativeElement.style.color = 'red';
         this.title.last.nativeElement.style.color = 'yellow';

    }


    increment(){
      console.log('view child', this.child);

        this.child.incremnet();
    }

    decrement(){
      // this.child.decrement();
   }
}
