import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  id: number = 0;
  constructor(public http: Http) { }

  
  private baseURL: string = "https://pokeapi.co/api/v2/pokemon";

  public getInfoPage1() {
    return this.http.get(this.baseURL);
  }

  public getInfoPage2() {
    return this.http.get(this.baseURL + "?offset=20&limit=20");
  }

  public getInfoPage3() {
    return this.http.get(this.baseURL + "?offset=40&limit=20");
  }
}