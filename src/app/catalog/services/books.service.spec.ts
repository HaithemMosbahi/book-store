import { TestBed, inject } from '@angular/core/testing';

import { CatalogService } from './books.service';

describe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogService]
    });
  });

  it('should be created', inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
  }));
});
