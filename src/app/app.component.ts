import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes=>
      this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
