import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './heroes.mock';
import { Hero } from './hero';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private msgService: MsgService) {}

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
 */

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.msgService.add('[HeroService] Fetching heroes ...');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.msgService.add('[HeroService] Fetching Hero #' + id);
    return of(HEROES.find(hero => hero.id == id));
  }
}
