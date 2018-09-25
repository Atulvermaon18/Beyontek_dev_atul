import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyviewdetailComponent } from './mypolicyviewdetail.component';

describe('MypolicyviewdetailComponent', () => {
  let component: MypolicyviewdetailComponent;
  let fixture: ComponentFixture<MypolicyviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicyviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicyviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
