import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientClaimIntimationComponent } from './client-claim-intimation.component';

describe('ClientClaimIntimationComponent', () => {
  let component: ClientClaimIntimationComponent;
  let fixture: ComponentFixture<ClientClaimIntimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientClaimIntimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientClaimIntimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
