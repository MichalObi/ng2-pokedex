import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokemonDetailsService {

  constructor(private http:Http) {
  }

  private pokeApiUrl = 'http://pokeapi.co/api/v2/pokemon/';

  getPokemonDetails(pokemon) : Observable<any[]> {
    return this.http.get(this.pokeApiUrl + pokemon)
           .map((res:Response) => res.json())
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
