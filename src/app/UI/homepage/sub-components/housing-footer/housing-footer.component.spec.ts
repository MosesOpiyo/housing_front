import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingFooterComponent } from './housing-footer.component';

describe('HousingFooterComponent', () => {
  let component: HousingFooterComponent;
  let fixture: ComponentFixture<HousingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
