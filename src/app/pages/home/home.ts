import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  generaciones = [
    {
      id: 1,
      nombre: 'Generación I',
      region: 'Kanto',
      cantidad: 151,
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
      id: 2,
      nombre: 'Generación II',
      region: 'Johto',
      cantidad: 100,
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png'
    },
    {
      id: 3,
      nombre: 'Generación III',
      region: 'Hoenn',
      cantidad: 135,
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png'
    },
    {
      id: 4,
      nombre: 'Generación IV',
      region: 'Sinnoh',
      cantidad: 107,
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png'
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async cerrarSesion() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}