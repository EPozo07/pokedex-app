import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';
import { AuthService } from '../../services/auth';

@Component({
  standalone: true,
  selector: 'app-perfil',
  imports: [CommonModule, RouterLink],
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
    this.cdr.detectChanges();
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.uploading = true;
    const fileExt = file.name.split('.').pop();
    
    const { data, error } = await this.supabaseService.uploadAvatar(this.user.id, file);

    if (error) {
      console.error('Error al subir avatar:', error);
    } else {
      this.avatarUrl = this.supabaseService.getAvatarUrl(this.user.id, fileExt);
    }
    
    this.uploading = false;
    this.cdr.detectChanges();
  }
}