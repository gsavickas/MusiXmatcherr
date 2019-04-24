import { TestBed } from '@angular/core/testing';

import { AddPlaylistServiceService } from './add-playlist-service.service';

describe('AddPlaylistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlaylistServiceService = TestBed.get(AddPlaylistServiceService);
    expect(service).toBeTruthy();
  });
});
