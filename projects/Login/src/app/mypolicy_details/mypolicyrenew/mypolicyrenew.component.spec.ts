import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyrenewComponent } from './mypolicyrenew.component';

describe('MypolicyrenewComponent', () => {
  let component: MypolicyrenewComponent;
  let fixture: ComponentFixture<MypolicyrenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicyrenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicyrenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
