import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPreviewComponent } from './user-detail-preview.component';

describe('UserDetailPreviewComponent', () => {
  let component: UserDetailPreviewComponent;
  let fixture: ComponentFixture<UserDetailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
