import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[] = [];
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

  getHeroes(): void {
    this._data.getHeroes().subscribe(list => (this.heroes = list));
  }

  add(name: string): void {
    name = name.trim();
    this._data
      .addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete({ id, name }): void {
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
