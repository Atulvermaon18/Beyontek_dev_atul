import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewclaimComponent } from './newclaim.component';

describe('NewclaimComponent', () => {
  let component: NewclaimComponent;
  let fixture: ComponentFixture<NewclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
