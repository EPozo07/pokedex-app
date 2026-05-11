import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartaPokemon } from '../../components/carta-pokemon/carta-pokemon';
import { PokemonInterface } from '../../models/pokemon/pokemon';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonSearchbar, IonSpinner, IonText } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-generacion',
  imports: [CommonModule, RouterLink, FormsModule, CartaPokemon, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonSearchbar, IonSpinner, IonText],
  templateUrl: './generacion.html',
  styleUrls: ['./generacion.css'],
})
export class Generacion implements OnInit {
  allPokemons: any[] = [];
  pokemons: any[] = [];
  loading: boolean = true;
  busqueda: string = '';
  selectedType: string = 'all';
  types: string[] = [
    'all', 'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
  ];
  pokemonEncontrado: PokemonInterface | null = null;
  errorNoEncontrado: string = '';
  genId: number = 1;

  constructor(
    private pokemonService: Pokemon,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.genId = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonsByGeneration(this.genId).subscribe((data: any) => {
      this.allPokemons = data.pokemon_species;
      this.pokemons = this.allPokemons;
      this.loading = false;
      this.cdr.detectChanges();
    }, (error) => {
      console.error('Error al cargar pokémon de la generación:', error);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  filtrarPorTipo(): void {
    if (this.selectedType === 'all') {
      this.pokemons = this.allPokemons;
      return;
    }
    this.pokemonService.getPokemonsByType(this.selectedType).subscribe((data: any) => {
      const pokeNames = new Set(data.pokemon.map((item: any) => item.pokemon.name));
      this.pokemons = this.allPokemons.filter((pokemon: any) => pokeNames.has(pokemon.name));
      this.cdr.detectChanges();
    }, (error) => {
      console.error('Error al filtrar por tipo:', error);
      this.pokemons = this.allPokemons;
      this.cdr.detectChanges();
    });
  }

  buscarPokemon(): void {
    if (!this.busqueda) return;
    this.pokemonEncontrado = null;
    this.errorNoEncontrado = '';
    this.pokemonService.getPokemon(this.busqueda.toLowerCase()).subscribe((data: any) => {
      this.pokemonEncontrado = data;
      this.cdr.detectChanges();
    }, (error) => {
      this.errorNoEncontrado = 'Pokémon no encontrado. Intenta con otro nombre o ID.';
      this.cdr.detectChanges();
    });
  }
}