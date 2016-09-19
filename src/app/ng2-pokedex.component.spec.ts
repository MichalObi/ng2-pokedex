import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2PokedexAppComponent } from '../app/ng2-pokedex.component';

beforeEachProviders(() => [Ng2PokedexAppComponent]);

describe('App: Ng2Pokedex', () => {
  it('should create the app',
      inject([Ng2PokedexAppComponent], (app: Ng2PokedexAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-pokedex works!\'',
      inject([Ng2PokedexAppComponent], (app: Ng2PokedexAppComponent) => {
    expect(app.title).toEqual('ng2-pokedex works!');
  }));
});
