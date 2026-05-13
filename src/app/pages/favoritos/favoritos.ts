import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonAlert, IonToast, IonModal } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-favoritos',
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonAlert, IonToast, IonModal],
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css']
})
export class Favoritos implements OnInit {
  favoritos: any[] = [];
  loading: boolean = true;
  showAlert: boolean = false;
  showToast: boolean = false;
  showModal: boolean = false;
  toastMessage: string = '';
  selectedId: number | null = null;
  selectedPokemon: any = null;

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'Eliminar',
      role: 'confirm',
      handler: () => this.confirmarEliminar()
    }
  ];

  constructor(
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.getFavoritos();
    if (error) {
      console.error('Error al cargar favoritos:', error);
    } else {
      this.favoritos = data || [];
    }
    this.loading = false;
    this.cdr.detectChanges();
  }

  abrirModal(favorito: any) {
    this.selectedPokemon = favorito;
    this.showModal = true;
  }

  mostrarAlert(id: number) {
    this.selectedId = id;
    this.showAlert = true;
  }

  async confirmarEliminar() {
    if (!this.selectedId) return;
    const { error } = await this.supabaseService.deleteFavorito(this.selectedId);
    if (!error) {
      this.favoritos = this.favoritos.filter(f => f.id !== this.selectedId);
      this.toastMessage = '¡Favorito eliminado!';
      this.showToast = true;
      this.cdr.detectChanges();
    }
  }
}