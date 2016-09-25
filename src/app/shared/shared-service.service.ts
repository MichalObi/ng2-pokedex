import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {
  private _pokeSearch = new Subject<string>();
  public searchTextStream$ = this._pokeSearch.asObservable();
  insertData(data:string) {
    this._pokeSearch.next(data);
  }
}
