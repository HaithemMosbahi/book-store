import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderComponent } from './order-page.component';

describe('CartOrderComponent', () => {
  let component: CartOrderComponent;
  let fixture: ComponentFixture<CartOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
