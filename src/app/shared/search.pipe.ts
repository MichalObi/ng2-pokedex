import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, pokeSearch?: any): any {
    return value.filter((pokemon)=>pokemon.name.startsWith(pokeSearch));
  }
}
