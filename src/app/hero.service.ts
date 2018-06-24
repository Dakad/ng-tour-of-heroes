import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MsgService } from './msg.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const { API_URL } = environment; // URL to web api

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private msgService: MsgService) {}

  /** Log a HeroService msg with the msgService */
  private log(msg: string) {
    this.msgService.add('[HeroService] ' + msg);
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.log('Fetching heroes ...');
    return this.http.get<Hero[]>(API_URL);
  }

  getHero(id: number): Observable<Hero> {
    this.log('Fetching Hero #' + id);
    const url = `${API_URL}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('getHero id=' + id))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
