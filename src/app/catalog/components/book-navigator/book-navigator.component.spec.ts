import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNavigatorComponent } from './book-navigator.component';

describe('BookNavigatorComponent', () => {
  let component: BookNavigatorComponent;
  let fixture: ComponentFixture<BookNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
