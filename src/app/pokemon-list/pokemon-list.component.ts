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
      console.log(this.pokemonsList);
    });
  }
}
