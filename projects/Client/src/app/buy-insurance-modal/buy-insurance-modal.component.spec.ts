import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInsuranceModalComponent } from './buy-insurance-modal.component';

describe('BuyInsuranceModalComponent', () => {
  let component: BuyInsuranceModalComponent;
  let fixture: ComponentFixture<BuyInsuranceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyInsuranceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyInsuranceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
