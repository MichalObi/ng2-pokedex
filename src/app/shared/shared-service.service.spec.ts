import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SharedService } from './shared-service.service';

describe('SharedService Service', () => {
  beforeEachProviders(() => [SharedService]);

  it('should ...',
      inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
});
