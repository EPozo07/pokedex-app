import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getFavoritos() {
    return this.supabase.from('favoritos').select('*');
  }

  addFavorito(pokemon_id: number, pokemon_nombre: string, pokemon_imagen: string) {
    return this.supabase.from('favoritos').insert([{ pokemon_id, pokemon_nombre, pokemon_imagen }]);
  }

  deleteFavorito(id: number) {
    return this.supabase.from('favoritos').delete().eq('id', id);
  }
}