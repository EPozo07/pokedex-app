import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';
import { AuthService } from '../../services/auth';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-perfil',
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardContent],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil implements OnInit {
  user: any = null;
  avatarUrl: string = '';
  uploading: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.user = await this.authService.getUser();
    if (this.user) {
      this.avatarUrl = this.supabaseService.getAvatarUrl(this.user.id);
    }
    this.cdr.detectChanges();
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.uploading = true;
    
    const { data, error } = await this.supabaseService.uploadAvatar(this.user.id, file);

    if (error) {
      console.error('Error al subir avatar:', error);
    } else {
      this.avatarUrl = this.supabaseService.getAvatarUrl(this.user.id);
    }
    
    this.uploading = false;
    this.cdr.detectChanges();
  }
}