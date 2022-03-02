import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingOptionsComponent } from './housing-options.component';

describe('HousingOptionsComponent', () => {
  let component: HousingOptionsComponent;
  let fixture: ComponentFixture<HousingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
