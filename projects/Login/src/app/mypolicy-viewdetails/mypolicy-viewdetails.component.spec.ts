import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyViewdetailsComponent } from './mypolicy-viewdetails.component';

describe('MypolicyViewdetailsComponent', () => {
  let component: MypolicyViewdetailsComponent;
  let fixture: ComponentFixture<MypolicyViewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicyViewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicyViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
