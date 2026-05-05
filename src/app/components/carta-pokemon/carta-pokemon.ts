import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';

@Component({
  standalone: true,
  selector: 'app-carta-pokemon',
  imports: [RouterLink],
  templateUrl: './carta-pokemon.html',
  styleUrls: ['./carta-pokemon.css']
})
export class CartaPokemon {
  @Input() pokemon: any;

  constructor(private supabaseService: SupabaseService) {}

  async addFavorito() {
    const id = this.pokemon.url.split('/')[6];
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    
    const { error } = await this.supabaseService.addFavorito(
      Number(id),
      this.pokemon.name,
      imagen
    );

    if (error) {
      console.error('Error al añadir favorito:', error);
    } else {
      console.log('Añadido a favoritos!');
    }
  }
}