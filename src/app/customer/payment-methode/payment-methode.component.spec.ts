import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodeComponent } from './payment-methode.component';

describe('PaymentMethodeComponent', () => {
  let component: PaymentMethodeComponent;
  let fixture: ComponentFixture<PaymentMethodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
