import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentPageComponent } from './cart-content-page.component';

describe('CartContentComponent', () => {
  let component: CartContentPageComponent;
  let fixture: ComponentFixture<CartContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartContentPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
