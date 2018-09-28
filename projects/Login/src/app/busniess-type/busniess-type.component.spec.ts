import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusniessTypeComponent } from './busniess-type.component';

describe('BusniessTypeComponent', () => {
  let component: BusniessTypeComponent;
  let fixture: ComponentFixture<BusniessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusniessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusniessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
