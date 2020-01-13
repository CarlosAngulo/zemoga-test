import { TestBed } from '@angular/core/testing';

import { VoteBoardService } from './vote-board.service';

describe('VoteBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteBoardService = TestBed.get(VoteBoardService);
    expect(service).toBeTruthy();
  });
});
