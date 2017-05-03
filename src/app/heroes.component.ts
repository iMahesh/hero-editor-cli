import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';
import { Router } from '@angular/router'
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  selectedHero:Hero;
  heroes:Hero[];
  constructor(
    private _heroService:HeroService,
    private _router:Router){}
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
  gotoDetail():void{
    this._router.navigate(['/detail',this.selectedHero.id])
  }

}
