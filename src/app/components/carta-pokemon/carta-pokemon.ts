import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase';
import { IonButton, IonToast, IonActionSheet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-carta-pokemon',
  imports: [RouterLink, CommonModule, IonButton, IonToast, IonActionSheet],
  templateUrl: './carta-pokemon.html',
  styleUrls: ['./carta-pokemon.css']
})
export class CartaPokemon {
  @Input() pokemon: any;
  showToast: boolean = false;
  toastMessage: string = '';
  toastColor: string = 'success';
  showActionSheet: boolean = false;

  actionSheetButtons = [
    {
      text: ' Añadir a favoritos',
      handler: () => this.addFavorito()
    },
    {
      text: 'Ver detalle',
      handler: () => this.verDetalle()
    },
    {
      text: 'Cancelar',
      role: 'cancel'
    }
  ];

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  verDetalle() {
    const id = this.pokemon.url.split('/')[6];
    this.router.navigate(['/detalle', id]);
  }

  async addFavorito() {
    const id = this.pokemon.url.split('/')[6];
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    
    const { error } = await this.supabaseService.addFavorito(
      Number(id),
      this.pokemon.name,
      imagen
    );

    if (error) {
      this.toastMessage = 'Error al añadir favorito';
      this.toastColor = 'danger';
    } else {
      this.toastMessage = '¡Añadido a favoritos!';
      this.toastColor = 'success';
    }
    this.showToast = true;
  }
}