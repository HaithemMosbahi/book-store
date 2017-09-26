import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsContainerComponent } from './reviews-container.component';

describe('ReviewsContainerComponent', () => {
  let component: ReviewsContainerComponent;
  let fixture: ComponentFixture<ReviewsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
