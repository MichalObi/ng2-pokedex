import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared'

@Component({
  moduleId: module.id,
  selector: 'pokemon-header',
  templateUrl: 'pokemon-header.component.html',
  styleUrls: ['pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {

  constructor(public _sharedService: SharedService) {}

  ngOnInit() {
    this._sharedService.insertData('');
  }

  setPokeSearch(search) {
    this._sharedService.insertData(search);
  }

}
