import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PokemonDetailsService } from './pokemon-details.service';

describe('PokemonDetails Service', () => {
  beforeEachProviders(() => [PokemonDetailsService]);

  it('should ...',
      inject([PokemonDetailsService], (service: PokemonDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
