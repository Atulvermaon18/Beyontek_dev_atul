import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyplanComponent } from './modal-buyplan.component';

describe('ModalBuyplanComponent', () => {
  let component: ModalBuyplanComponent;
  let fixture: ComponentFixture<ModalBuyplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuyplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
