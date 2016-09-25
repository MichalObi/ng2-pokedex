import { Component, OnInit} from '@angular/core';
import {PokemonListService} from './service/pokemon-list.service'
import { SharedService } from '../../app/shared'
import {SearchPipe} from '../../app/shared';
import { ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css'],
  providers: [PokemonListService],
  pipes: [SearchPipe],
  directives: [ROUTER_DIRECTIVES]
})
export class PokemonListComponent implements OnInit {

  pokeSearch = '';
  pokemonsList = [];

  constructor(private _pokemonListService:PokemonListService, public _sharedService: SharedService) {
    this._sharedService.searchTextStream$.subscribe(
          search => { this.pokeSearch = search; }
      )
  }

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
