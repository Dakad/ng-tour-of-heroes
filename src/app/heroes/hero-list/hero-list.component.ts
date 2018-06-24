import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() list: Hero[] = [];
  @Output('delete-hero') deleted = new EventEmitter<Hero>();

  constructor() {}

  ngOnInit() {}

  delete(select: Hero): void {
    this.deleted.emit(select);
  }
}
