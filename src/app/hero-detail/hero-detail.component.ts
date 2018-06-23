import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input('hero') selectedHero: Hero;

  constructor(
    private route: ActivatedRoute, //  holds information about the route to this instance of the HeroDetailComponent
    private location: Location, // Angular service for interacting with the browser
    private heroService: HeroService // gets hero data and this component will use it to get the hero-to-display
  ) {}

  ngOnInit() {
    this.getHeroDetail();
  }

  getHeroDetail(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => (this.selectedHero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
