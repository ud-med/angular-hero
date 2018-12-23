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

  public searchHeroes(item: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    item = item.toLowerCase();

    for (const hero of this.getHeroes()) {
      const name = hero.nombre.toLowerCase();
      if (name.indexOf(item) >= 0) {
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }
}
