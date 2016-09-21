import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PokemonListService } from './pokemon-list.service';

describe('PokemonList Service', () => {
  beforeEachProviders(() => [PokemonListService]);

  it('should ...',
      inject([PokemonListService], (service: PokemonListService) => {
    expect(service).toBeTruthy();
  }));
});
