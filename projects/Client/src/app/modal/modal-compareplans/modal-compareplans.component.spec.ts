import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompareplansComponent } from './modal-compareplans.component';

describe('ModalCompareplansComponent', () => {
  let component: ModalCompareplansComponent;
  let fixture: ComponentFixture<ModalCompareplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompareplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompareplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
