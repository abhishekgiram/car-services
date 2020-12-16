import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSizeComponent } from './car-size.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('CarSizeComponent', () => {
  let component: CarSizeComponent;
  let fixture: ComponentFixture<CarSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [    
        RouterTestingModule                   
      ],
      declarations: [ CarSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
