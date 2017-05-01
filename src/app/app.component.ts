import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})

export class AppComponent {
  selectedHero:Hero;
  title: string = 'Tour of Heroes';
  heroes:Hero[];
  constructor(private _heroService:HeroService){}
   getHeroes(): void {
    this._heroService.getHeroes()
    .then(heroes => this.heroes = heroes);
  }
  ngOnInit():void{
    this.getHeroes();
  }
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}
