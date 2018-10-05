import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimintimationFormComponent } from './claimintimation-form.component';

describe('ClaimintimationFormComponent', () => {
  let component: ClaimintimationFormComponent;
  let fixture: ComponentFixture<ClaimintimationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimintimationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimintimationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
