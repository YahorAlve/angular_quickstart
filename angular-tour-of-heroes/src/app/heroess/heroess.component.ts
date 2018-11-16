import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroess',
  templateUrl: './heroess.component.html',
  styleUrls: ['./heroess.component.css']
})
export class HeroessComponent implements OnInit {

  heroes: Hero[];

  /*selectedHero: Hero;*/

  heroFixed: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

}
