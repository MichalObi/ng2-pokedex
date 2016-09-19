import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('ok');
  }

}
