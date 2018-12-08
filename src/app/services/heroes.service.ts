import { Heroe } from './heroe';
import { heroes } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  public getHeroes(): Heroe[] {
    return heroes;
  }

  public getHeroe(index: number) {
    return heroes[index];
  }
}
