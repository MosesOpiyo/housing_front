import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarHousingComponent } from './similar-housing.component';

describe('SimilarHousingComponent', () => {
  let component: SimilarHousingComponent;
  let fixture: ComponentFixture<SimilarHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarHousingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
