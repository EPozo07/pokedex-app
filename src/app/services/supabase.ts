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

  async addFavorito(pokemon_id: number, pokemon_name: string, pokemon_imagen: string) {
    const { data: { session } } = await this.supabase.auth.getSession();
    const user_id = session?.user?.id;
    
    return this.supabase.from('favoritos').insert([{ 
      pokemon_id, 
      pokemon_nombre: pokemon_name, 
      pokemon_imagen,
      user_id
    }]);
  }

  deleteFavorito(id: number) {
    return this.supabase.from('favoritos').delete().eq('id', id);
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  getSession() {
    return this.supabase.auth.getSession();
  }

  onAuthStateChange(callback: any) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  async uploadAvatar(userId: string, file: File) {
    const fileName = `${userId}.jpg`;
    
    const { data, error } = await this.supabase.storage
      .from('avatars')
      .upload(fileName, file, { upsert: true, contentType: 'image/jpeg' });
      
    return { data, error };
  }

 getAvatarUrl(userId: string) {
  const { data } = this.supabase.storage
    .from('avatars')
    .getPublicUrl(`${userId}.jpg`);
    
  return `${data.publicUrl}?t=${new Date().getTime()}`;
}
}