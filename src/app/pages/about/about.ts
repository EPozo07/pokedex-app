import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonBadge],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  nombre = 'Eloy';
  descripcion = 'App de Pokémon usando PokéAPI';
  tecnologia = 'Angular';
}