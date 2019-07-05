import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

  heroe: any = {};

  constructor(private activatedRouted: ActivatedRoute,
              private _heroesService: HeroesService ) { 

    this.activatedRouted.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params[ 'id' ] );
      console.log(this.heroe);
    } )
  }
}
