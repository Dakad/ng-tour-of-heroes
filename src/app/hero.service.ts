import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment as ENV } from '../environments/environment';

import { HEROES } from './heroes.mock';
import { Hero } from './hero';
import { MsgService } from './msg.service';

const { API_URL, API_KEY } = ENV; // API_URL and API_KEY to MARVEL API

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private msgService: MsgService) {}

  /** Log a HeroService message with the MessageService */
  private log(msg: string) {
    this.msgService.add('[HeroService] ' + msg);
  }

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
