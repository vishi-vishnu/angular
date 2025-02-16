import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitdataComponent } from './fruitdata.component';

describe('FruitdataComponent', () => {
  let component: FruitdataComponent;
  let fixture: ComponentFixture<FruitdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
