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
import { PokemonFooterComponent } from './pokemon-footer.component';

describe('Component: PokemonFooter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PokemonFooterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PokemonFooterComponent],
      (component: PokemonFooterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PokemonFooterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PokemonFooterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <pokemon-footer></pokemon-footer>
  `,
  directives: [PokemonFooterComponent]
})
class PokemonFooterComponentTestController {
}
