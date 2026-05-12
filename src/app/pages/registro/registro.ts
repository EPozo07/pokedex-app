import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonButton, IonText],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  registroForm: FormGroup;
  error: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { noMatch: true };
  }

  async register() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const { email, password } = this.registroForm.value;
    const { data, error } = await this.authService.signUp(email, password);

    if (error) {
      this.error = 'Error al registrarse. Prueba con otro email';
      this.loading = false;
    } else {
      this.router.navigate(['/home']);
    }
  }

  get emailControl() { return this.registroForm.get('email'); }
  get passwordControl() { return this.registroForm.get('password'); }
  get confirmPasswordControl() { return this.registroForm.get('confirmPassword'); }
}