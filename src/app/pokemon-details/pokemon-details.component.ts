import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';
import {PokemonDetailsService} from './service/pokemon-details.service'

@Component({
  moduleId: module.id,
  selector: 'app-pokemon-details',
  templateUrl: 'pokemon-details.component.html',
  styleUrls: ['pokemon-details.component.css'],
  providers: [PokemonDetailsService]
})
export class PokemonDetailsComponent implements OnInit {

  pokemonDetails = {};
  private _routeSegmentParam;
  constructor(private _segment:RouteSegment, private _pokemonDetailsService:PokemonDetailsService) {}

  ngOnInit() {
    this._routeSegmentParam = this._segment.parameters;
    this._pokemonDetailsService.getPokemonDetails(this._routeSegmentParam.id)
    .subscribe((pokemonDetails:any) => {
      this.pokemonDetails = pokemonDetails;
      console.log(this.pokemonDetails);
    });
  }

}
