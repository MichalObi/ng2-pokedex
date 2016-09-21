import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pokemon-header',
  templateUrl: 'pokemon-header.component.html',
  styleUrls: ['pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('ok');
  }

}
