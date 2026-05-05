import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from './services/supabase';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.getFavoritos();
    console.log('Favoritos:', data);
    console.log('Error:', error);
  }
}