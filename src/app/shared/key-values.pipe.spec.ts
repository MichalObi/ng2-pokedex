import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { KeyValues } from './key-values.pipe';

describe('KeyValues Pipe', () => {
  beforeEachProviders(() => [KeyValues]);

  it('should transform the input', inject([KeyValues], (pipe: KeyValues) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
