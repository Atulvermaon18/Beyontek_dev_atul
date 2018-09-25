import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypolicypremiumComponent } from './mypolicypremium.component';

describe('MypolicypremiumComponent', () => {
  let component: MypolicypremiumComponent;
  let fixture: ComponentFixture<MypolicypremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypolicypremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypolicypremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
