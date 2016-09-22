import { Component, OnInit } from '@angular/core';
import {PokemonListService} from './service/pokemon-list.service'

@Component({
  moduleId: module.id,
  selector: 'pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css'],
  providers: [PokemonListService]
})
export class PokemonListComponent implements OnInit {

  constructor(private _pokemonListService:PokemonListService) {}

  pokemonsList = [];


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
