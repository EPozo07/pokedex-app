import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartaPokemon } from '../../components/carta-pokemon/carta-pokemon';
import { PokemonInterface } from '../../models/pokemon/pokemon';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink, FormsModule, CartaPokemon],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  pokemons: PokemonInterface[] = [];
  loading: boolean = true;
  busqueda: string = '';
  pokemonEncontrado: PokemonInterface | null = null;
  errorNoEncontrado: string = '';
  constructor(
    private pokemonService: Pokemon,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      console.log('Pokémon cargados:', data);
      this.pokemons = data.results;
      this.loading = false;
      this.cdr.detectChanges();
    }, (error) => {
      console.error('Error al cargar el pokémon:', error);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  buscarPokemon():  void {
    if (!this.busqueda) return;
    this.pokemonEncontrado = null;
    this.errorNoEncontrado = '';
    this.pokemonService.getPokemon(this.busqueda.toLowerCase()).subscribe((data: any) => {
      console.log('Pokémon encontrado:', data);
      this.pokemonEncontrado = data;
      this.cdr.detectChanges();
    }, (error) => {
      console.error('Error al buscar el pokémon:', error);
      this.errorNoEncontrado = 'Pokémon no encontrado. Intenta con otro nombre o ID.';
      this.cdr.detectChanges();
    });
  }
}