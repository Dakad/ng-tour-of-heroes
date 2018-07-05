import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  template: `
      <app-hero-add (new-hero)="addHero($event)"> </app-hero-add>

      <app-hero-list [list]="heroes" (delete-hero)="deleteHero($event)"> </app-hero-list>

      <!-- <app-hero-detail [hero]="selectedHero"> </app-hero-detail> -->
  `
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private _data: HeroService) {
    // this.selectedHero = this.heroes[0];
  }

  ngOnInit() {
    this.getHeroes();
  }

  /*   onSelect(select: Hero): void {
    this.selectedHero = select;
  } */

  getHeroes(): void {
    this._data.getHeroes().subscribe(list => (this.heroes = list));
  }

  addHero(name: string): void {
    this._data
      .addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  deleteHero({ id, name }): void {
    const ok = window.confirm(
      `Do u really want to delete Hero #${id} - ${name} ?!?`
    );
    if (!ok) return;
    this._data
      .deleteHero(id)
      .subscribe(
        _ =>
          (this.heroes = this.heroes.filter(({ id: heroId }) => heroId != id))
      );
  }
}
