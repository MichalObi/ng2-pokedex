import { Component } from '@angular/core';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  moduleId: module.id,
  selector: 'ng2-pokedex-app',
  templateUrl: 'ng2-pokedex.component.html',
  styleUrls: ['ng2-pokedex.component.css'],
  directives: [PokemonListComponent]
})
export class Ng2PokedexAppComponent {
}
