import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((data) => {
      this.router.navigateByUrl('/transaction');
    });
  }
}
