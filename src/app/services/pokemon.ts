import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Pokemon {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }
  getPokemons(){
    return this.http.get(`${this.apiUrl}/pokemon?limit=493`);
  }
  getPokemonsByType(type: string){
    return this.http.get(`${this.apiUrl}/type/${type}`);
  }
  getPokemon(id: any){
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }
  getPokemonsByGeneration(id: number) {
  return this.http.get(`${this.apiUrl}/generation/${id}`);
}
}
