import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  @Output('new-hero') addedHero = new EventEmitter<string>();
  /* private nHero: Hero; */

  constructor() {}

  ngOnInit() {}

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.addedHero.emit(name);
  }
}
