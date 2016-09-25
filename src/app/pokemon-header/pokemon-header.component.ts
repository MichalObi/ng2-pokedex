import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../app/shared'

@Component({
  moduleId: module.id,
  selector: 'pokemon-header',
  templateUrl: 'pokemon-header.component.html',
  styleUrls: ['pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {

  constructor(public _sharedService: SharedService) {}

  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('')
    this._sharedService.insertData('');
  }

  setPokeSearch(search) {
    this.update.emit(search);
    this._sharedService.insertData(search);
  }

}
