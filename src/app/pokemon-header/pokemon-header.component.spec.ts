import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PokemonHeaderComponent } from './pokemon-header.component';

describe('Component: PokemonHeader', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PokemonHeaderComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PokemonHeaderComponent],
      (component: PokemonHeaderComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PokemonHeaderComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PokemonHeaderComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <pokemon-header></pokemon-header>
  `,
  directives: [PokemonHeaderComponent]
})
class PokemonHeaderComponentTestController {
}
