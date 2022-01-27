import { TestBed } from '@angular/core/testing';

import { FavoriteAPIService } from './favorite-api.service';

describe('FavoriteAPIService', () => {
  let service: FavoriteAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
