import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderCompleteComponent } from './cart-order-complete.component';

describe('CartOrderCompleteComponent', () => {
  let component: CartOrderCompleteComponent;
  let fixture: ComponentFixture<CartOrderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
