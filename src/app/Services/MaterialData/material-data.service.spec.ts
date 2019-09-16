import { TestBed } from '@angular/core/testing';

import { MaterialDataService } from './material-data.service';

describe('MaterialDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialDataService = TestBed.get(MaterialDataService);
    expect(service).toBeTruthy();
  });
});
