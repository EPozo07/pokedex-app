import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';

@Component({
  standalone: true,
  selector: 'app-favoritos',
  imports: [CommonModule, RouterLink],
  templateUrl: './favoritos.html',
  styleUrls: ['./favoritos.css']
})
export class Favoritos implements OnInit {
  favoritos: any[] = [];
  loading: boolean = true;

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

  async eliminarFavorito(id: number) {
    const { error } = await this.supabaseService.deleteFavorito(id);
    if (!error) {
      this.favoritos = this.favoritos.filter(f => f.id !== id);
      this.cdr.detectChanges();
    }
  }
}