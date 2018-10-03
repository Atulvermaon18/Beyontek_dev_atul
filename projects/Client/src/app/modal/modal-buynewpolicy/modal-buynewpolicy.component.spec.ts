import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuynewpolicyComponent } from './modal-buynewpolicy.component';

describe('ModalBuynewpolicyComponent', () => {
  let component: ModalBuynewpolicyComponent;
  let fixture: ComponentFixture<ModalBuynewpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuynewpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuynewpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
