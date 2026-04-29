import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
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
}