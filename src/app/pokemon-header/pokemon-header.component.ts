import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pokemon-header',
  templateUrl: 'pokemon-header.component.html',
  styleUrls: ['pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {

  constructor() {}

  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }

}
