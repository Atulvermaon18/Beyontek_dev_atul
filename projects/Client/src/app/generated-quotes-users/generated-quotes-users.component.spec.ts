import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedQuotesUsersComponent } from './generated-quotes-users.component';

describe('GeneratedQuotesUsersComponent', () => {
  let component: GeneratedQuotesUsersComponent;
  let fixture: ComponentFixture<GeneratedQuotesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedQuotesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedQuotesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
