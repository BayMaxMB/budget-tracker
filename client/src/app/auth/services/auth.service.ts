import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
const apiURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http
      .post(`${apiURL}/login`, body)
      .pipe(tap((res) => this.setSession(res)));
  }

  public getAccounts() {
    return this.http.get(`${apiURL}/accounts`);
  }

  public isLoggedIn() {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      return Date.now() < Number(expiresIn);
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresIn');
  }

  private setSession(res: any) {
    const expiresIn = Date.now() + Number(res.expiresIn);
    localStorage.setItem('idToken', res.token);
    localStorage.setItem('expiresIn', String(expiresIn));
  }
}
