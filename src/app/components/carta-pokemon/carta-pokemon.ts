import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-carta-pokemon',
  imports: [RouterLink],
  templateUrl: './carta-pokemon.html',
  styleUrls: ['./carta-pokemon.css']
})
export class CartaPokemon {
  @Input() pokemon: any;
}