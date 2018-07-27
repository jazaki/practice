import { Component, OnInit } from '@angular/core';
import { Hero } from "../_helpers/hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.fetchHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5)
      });
  }
}