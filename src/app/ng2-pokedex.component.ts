import { Component } from '@angular/core';

import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFooterComponent } from './pokemon-footer/pokemon-footer.component'

@Component({
  moduleId: module.id,
  selector: 'ng2-pokedex-app',
  templateUrl: 'ng2-pokedex.component.html',
  styleUrls: ['ng2-pokedex.component.css'],
  directives: [PokemonHeaderComponent, PokemonListComponent, PokemonFooterComponent]
})
export class Ng2PokedexAppComponent {
}
