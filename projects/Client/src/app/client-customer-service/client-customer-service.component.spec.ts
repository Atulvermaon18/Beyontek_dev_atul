import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCustomerServiceComponent } from './client-customer-service.component';

describe('ClientCustomerServiceComponent', () => {
  let component: ClientCustomerServiceComponent;
  let fixture: ComponentFixture<ClientCustomerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCustomerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
