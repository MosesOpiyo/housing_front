import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseClientsComponent } from './house-clients.component';

describe('HouseClientsComponent', () => {
  let component: HouseClientsComponent;
  let fixture: ComponentFixture<HouseClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
