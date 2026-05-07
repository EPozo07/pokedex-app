import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.onAuthStateChange((event: any, session: any) => {
      this.userSubject.next(session?.user || null);
    });
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabaseService.signUp(email, password);
    return { data, error };
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabaseService.signIn(email, password);
    return { data, error };
  }

  async signOut() {
    await this.supabaseService.signOut();
  }

  async getUser() {
    const { data } = await this.supabaseService.getSession();
    return data.session?.user || null;
  }
}