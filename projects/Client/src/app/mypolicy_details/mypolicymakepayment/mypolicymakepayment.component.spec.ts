import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicymakepaymentComponent } from './mypolicymakepayment.component';

describe('MypolicymakepaymentComponent', () => {
  let component: MypolicymakepaymentComponent;
  let fixture: ComponentFixture<MypolicymakepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicymakepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicymakepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
