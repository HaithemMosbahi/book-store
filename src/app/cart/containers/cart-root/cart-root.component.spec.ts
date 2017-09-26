import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRootComponent } from './cart-root.component';

describe('CartRootComponent', () => {
  let component: CartRootComponent;
  let fixture: ComponentFixture<CartRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
