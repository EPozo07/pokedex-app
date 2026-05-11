import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonText, IonButton],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login() {
    if (!this.email || !this.password) {
      this.error = 'Por favor rellena todos los campos';
      return;
    }

    this.loading = true;
    this.error = '';

    const { data, error } = await this.authService.signIn(this.email, this.password);

   if (error) {
  if (error.message.includes('Email not confirmed')) {
    this.error = 'Confirma tu email antes de iniciar sesión';
  } else {
    this.error = 'Email o contraseña incorrectos';
  }
  this.loading = false;
} else {
  this.router.navigate(['/home']);
}
  }
}