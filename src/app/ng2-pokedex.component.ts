import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';

import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonFooterComponent } from './pokemon-footer/pokemon-footer.component'

@Component({
  moduleId: module.id,
  selector: 'ng2-pokedex-app',
  templateUrl: 'ng2-pokedex.component.html',
  styleUrls: ['ng2-pokedex.component.css'],
  directives: [ROUTER_DIRECTIVES, PokemonHeaderComponent, PokemonListComponent, PokemonDetailsComponent, PokemonFooterComponent]
})
@Routes([
  {path: '', component: PokemonListComponent},
  {path: "/pokemon-details/:id", component: PokemonDetailsComponent}
])
export class Ng2PokedexAppComponent {
  constructor(public router: Router){}
}
