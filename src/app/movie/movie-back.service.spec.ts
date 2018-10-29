import { TestBed } from '@angular/core/testing';

import { MovieBackService } from './movie-back.service';

describe('MovieBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieBackService = TestBed.get(MovieBackService);
    expect(service).toBeTruthy();
  });
});
