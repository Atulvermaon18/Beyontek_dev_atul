import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGetQuotesComponent } from './client-get-quotes.component';

describe('ClientGetQuotesComponent', () => {
  let component: ClientGetQuotesComponent;
  let fixture: ComponentFixture<ClientGetQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGetQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGetQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
