import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SharedService } from '../../app/shared';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pokemon-header',
  templateUrl: 'pokemon-header.component.html',
  styleUrls: ['pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {

  hidden:boolean = false;

  constructor(private _router: Router, private _location:Location, public _sharedService: SharedService) {
     this._router.changes.subscribe((val) => {
      this.isHidden();
     });
  }

  ngOnInit() {
    this._sharedService.insertData('');
  }

  setPokeSearch(search) {
    this._sharedService.insertData(search);
  }

  isHidden() {
    let list = [''],
        route = this._location.path();
        this.hidden = list.indexOf(route) > -1;
  }

}
