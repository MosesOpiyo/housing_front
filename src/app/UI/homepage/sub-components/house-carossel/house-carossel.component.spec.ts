import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCarosselComponent } from './house-carossel.component';

describe('HouseCarosselComponent', () => {
  let component: HouseCarosselComponent;
  let fixture: ComponentFixture<HouseCarosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCarosselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCarosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
