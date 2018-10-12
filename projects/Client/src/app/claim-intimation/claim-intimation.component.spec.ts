import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimIntimationComponent } from './claim-intimation.component';

describe('ClaimIntimationComponent', () => {
  let component: ClaimIntimationComponent;
  let fixture: ComponentFixture<ClaimIntimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimIntimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimIntimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
