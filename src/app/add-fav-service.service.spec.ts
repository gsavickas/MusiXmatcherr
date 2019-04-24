import { TestBed } from '@angular/core/testing';

import { AddFavServiceService } from './add-fav-service.service';

describe('AddFavServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFavServiceService = TestBed.get(AddFavServiceService);
    expect(service).toBeTruthy();
  });
});
