import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonInterface } from '../../models/pokemon/pokemon';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonSpinner, IonBadge } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-detalle',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonSpinner, IonBadge],
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css'],
})
export class Detalle implements OnInit {
  pokemon: PokemonInterface | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: Pokemon,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(
      (pokemon) => {
        this.pokemon = pokemon as PokemonInterface;
        this.loading = false;
        this.cdr.detectChanges();
      }, (error) => {
        console.error('Error al cargar el pokémon:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    );
  }
  /*Mapa para tipos de pokémon, asi cada uno tiene su color  */
  typeColors: { [key: string]: string } = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};
getTypeColor(): string {
  if (!this.pokemon?.types?.length) return '#ffd700';

  const type = this.pokemon.types[0].type.name;
  return this.typeColors[type] || '#ffd700';
}

  /*Mapa para tipos de pokémon, asi cada uno tiene su fondo sombreado del borde  */
typeShadows: { [key: string]: string } = {
  normal: '0 0 25px #A8A77A66',
  fire: '0 0 25px #EE8130AA, 0 0 50px #EE813055',
  water: '0 0 25px #6390F0AA, 0 0 50px #6390F055',
  electric: '0 0 25px #F7D02CAA, 0 0 60px #F7D02C66',
  grass: '0 0 25px #7AC74CAA, 0 0 50px #7AC74C55',
  ice: '0 0 25px #96D9D6AA, 0 0 50px #96D9D655',
  fighting: '0 0 25px #C22E28AA',
  poison: '0 0 25px #A33EA1AA, 0 0 50px #A33EA155',
  ground: '0 0 25px #E2BF65AA',
  flying: '0 0 25px #A98FF3AA, 0 0 50px #A98FF355',
  psychic: '0 0 25px #F95587AA, 0 0 60px #F9558766',
  bug: '0 0 25px #A6B91AAA',
  rock: '0 0 25px #B6A136AA',
  ghost: '0 0 25px #735797AA, 0 0 50px #73579755',
  dragon: '0 0 25px #6F35FCAA, 0 0 60px #6F35FC66',
  dark: '0 0 25px #705746AA',
  steel: '0 0 25px #B7B7CEAA',
  fairy: '0 0 25px #D685ADAA, 0 0 50px #D685AD55'
};

getTypeBackground(): string {
  if (!this.pokemon?.types?.length) return '#cc0000';
  const type = this.pokemon.types[0].type.name;
  const backgrounds: { [key: string]: string } = {
    normal: 'linear-gradient(135deg, #A8A77A, #C8C7A0)',
    fire: 'linear-gradient(135deg, #cc3300, #ff6600)',
    water: 'linear-gradient(135deg, #1a66cc, #4d99ff)',
    electric: 'linear-gradient(135deg, #cc9900, #ffcc00)',
    grass: 'linear-gradient(135deg, #336600, #66cc00)',
    ice: 'linear-gradient(135deg, #66cccc, #99ffff)',
    fighting: 'linear-gradient(135deg, #990000, #cc2200)',
    poison: 'linear-gradient(135deg, #660066, #990099)',
    ground: 'linear-gradient(135deg, #996600, #cc9900)',
    flying: 'linear-gradient(135deg, #6633cc, #9966ff)',
    psychic: 'linear-gradient(135deg, #cc0066, #ff3399)',
    bug: 'linear-gradient(135deg, #669900, #99cc00)',
    rock: 'linear-gradient(135deg, #666633, #999966)',
    ghost: 'linear-gradient(135deg, #330066, #663399)',
    dragon: 'linear-gradient(135deg, #330099, #6600ff)',
    dark: 'linear-gradient(135deg, #333300, #666633)',
    steel: 'linear-gradient(135deg, #666699, #9999cc)',
    fairy: 'linear-gradient(135deg, #cc6699, #ff99cc)',
  };
  return backgrounds[type] || 'linear-gradient(135deg, #cc0000, #ff6666)';
}
getTypeShadow(): string {
  if (!this.pokemon?.types?.length) return '0 0 25px #ffd70066';

  const type = this.pokemon.types[0].type.name;
  return this.typeShadows[type] || '0 0 25px #ffd70066';
}
volver(){
  window.history.back();
}
}
