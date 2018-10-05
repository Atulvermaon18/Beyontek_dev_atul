import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicyclaimComponent } from './mypolicyclaim.component';

describe('MypolicyclaimComponent', () => {
  let component: MypolicyclaimComponent;
  let fixture: ComponentFixture<MypolicyclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicyclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicyclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
