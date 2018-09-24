import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyquotedetailComponent } from './mypolicyquotedetail.component';

describe('MypolicyquotedetailComponent', () => {
  let component: MypolicyquotedetailComponent;
  let fixture: ComponentFixture<MypolicyquotedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicyquotedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicyquotedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
