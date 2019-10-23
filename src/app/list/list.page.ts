import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  providers: [
    PokemonService
  ]
})
export class ListPage implements OnInit {
  public listaPokemon: Array<any>;
  public listaPokemon2: Array<any>;
  results: Observable<any>;


  constructor(public pokemonService: PokemonService) {  }


  ngOnInit() {
    this.pokemonService.getInfoPage1().subscribe (
      data => {
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        this.listaPokemon = new Array<any>();
        this.listaPokemon = obj_json.results;
        // for(var i in obj_json) {
        //   this.listaPokemon.push(obj_json[i]);
        // }

        console.log(obj);
        console.log(obj_json);
        console.log(this.listaPokemon);
      }, error => {
        console.log(error);
      }
    );
  }

}
