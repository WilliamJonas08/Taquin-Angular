import { TestBed } from '@angular/core/testing';

import { Store } from './store.service';

describe('TransfertDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Store = TestBed.get(Store);
    expect(service).toBeTruthy();
  });
});
