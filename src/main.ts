import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2PokedexAppComponent, environment } from './app/';
import { SharedService } from './app/shared'
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2PokedexAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, SharedService]);
