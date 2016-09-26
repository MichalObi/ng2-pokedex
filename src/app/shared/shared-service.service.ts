import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {
  private _pokeSearch = new Subject<string>();
  public searchTextStream$ = this._pokeSearch.asObservable();

  insertData(data:string) {
    this._pokeSearch.next(data);
  }

  addPokemonImage(pokemon, i){
    let baseUrl = location.origin.replace('/#', '/');
    let assetsPath = '/app/assets/pokemon-image/';
    let pokemonImageUrl = baseUrl + assetsPath;
    pokemon.imageUrl = pokemonImageUrl + (i + 1) + '.png';
  }
}
