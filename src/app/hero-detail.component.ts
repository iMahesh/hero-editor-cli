import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service'
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: `./hero-detail.component.html`,
  styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location) { }

  ngOnInit(): void {
    this._route.params
      .switchMap((params: Params) => this._heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack():void{
    this._location.back();
  }

}