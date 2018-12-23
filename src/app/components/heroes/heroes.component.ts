import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroe';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor(private _heroesService: HeroesService,
    private router: Router, private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    // this.activatedRoute.params.subscribe(params => {
    //   this.heroes = this._heroeService.searchHeroes(params['filter']);
    //   console.log(this.heroes);
    // });
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }
}
