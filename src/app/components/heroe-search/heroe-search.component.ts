import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {
  heroe: any = {};
  constructor( private _heroesService: HeroesService,
    private router: Router  ) {

}

ngOnInit() {
  this.activatedRouted.params.subscribe( params => {
    this.heroe = this._heroesService.getHeroe( params[ 'Heroe' ] );
  } )
}

verHeroe( idx: number )
{
  this.router.navigate(  ['/heroe', idx ] );

}
}
