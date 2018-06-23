import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(private _data: HeroService) {
    // this.selectedHero = this.heroes[0];
  }

  ngOnInit() {
    this.getHeroes();
  }

  /*   onSelect(select: Hero): void {
    this.selectedHero = select;
  } */

  private getHeroes(): void {
    this._data.getHeroes().subscribe(list => (this.heroes = list));
  }
}
