import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MsgService } from './msg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const { API_URL } = environment; // URL to web api

const HTPP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private msgService: MsgService) {}

  /** Log a HeroService msg with the msgService */
  private log(msg: string) {
    this.msgService.add('[HeroService] ' + msg);
  }

  /** GET: get all hero from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(API_URL).pipe(
      tap(_ => this.log('Fetching heroes ...')),
      catchError(this.handleError('Get list of heroes', []))
    );
  }

  /** GET: get specific hero by #id from the server */
  getHero(id: number): Observable<Hero> {
    this.log('Fetching Hero #' + id);
    const url = `${API_URL}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('getHero id=' + id))
    );
  }

  /** POST: add a new hero to the server */
  addHero(nHero: Hero): Observable<Hero> {
    console.log(nHero);
    return this.http.post<Hero>(API_URL, nHero, HTPP_OPTIONS).pipe(
      tap((hero: Hero) => this.log('Add new' + hero)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(nHero: Hero): Observable<Hero> {
    return this.http.put(API_URL, nHero, HTPP_OPTIONS).pipe(
      tap(_ => this.log('Updated Hero #' + nHero.id)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = API_URL + '/' + id;

    return this.http.delete<Hero>(url, HTPP_OPTIONS).pipe(
      tap(_ => this.log('Deleted Hero #' + id)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'fetching', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
