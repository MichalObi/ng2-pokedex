import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValues'
})
export class KeyValues implements PipeTransform {

  transform(value) {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

}
