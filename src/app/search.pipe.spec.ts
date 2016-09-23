import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { SearchPipe } from './search.pipe';

describe('SearchPipe Pipe', () => {
  beforeEachProviders(() => [SearchPipe]);

  it('should transform the input', inject([SearchPipe], (pipe: SearchPipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
