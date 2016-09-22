import { Component, OnInit, Input } from '@angular/core';
import {PokemonListService} from './service/pokemon-list.service'
import {SearchPipe} from '../search.pipe';

@Component({
  moduleId: module.id,
  selector: 'pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css'],
  providers: [PokemonListService],
  pipes: [SearchPipe]
})
export class PokemonListComponent implements OnInit {

  @Input() searchPokemon;
  pokemonsList = [];

  constructor(private _pokemonListService:PokemonListService) {}

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this._pokemonListService.getAllPokemons()
    .subscribe((pokemonsList:any) => {
      this.pokemonsList = pokemonsList.results;
      this.pokemonsList.forEach(this.addPokemonImage);
    });
  }

  addPokemonImage(pokemon, i){
    let baseUrl = location.href.replace('/#', '/');
    let assetsPath = 'app/assets/pokemon-image/';
    let pokemonImageUrl = baseUrl + assetsPath;
    pokemon.imageUrl = pokemonImageUrl + (i + 1) + '.png';
  }
}
