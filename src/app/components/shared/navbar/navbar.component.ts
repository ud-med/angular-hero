import { HeroesService } from './../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[];

  constructor(private _heroeService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  searchHero(item: string) {
    console.log(item);
    this.heroes = this._heroeService.searchHeroes(item);
    this.router.navigate(['/heroes', item]);
  }
}
