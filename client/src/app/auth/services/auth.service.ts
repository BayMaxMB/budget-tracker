import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
const apiURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<unknown> {
    const body = new HttpParams().set('email', email).set('password', password);
    return this.http.post(`${apiURL}/login`, body).pipe(
      tap((res) => this.setSession(res)),
      catchError((err) => throwError(() => '401'))
    );
  }

  public getAccounts(): Observable<Object> {
    return this.http.get(`${apiURL}/accounts`);
  }

  public isLoggedIn(): boolean {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      return Date.now() < Number(expiresIn);
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresIn');
  }

  private setSession(res: any) {
    const expiresIn = Date.now() + Number(res.expiresIn);
    localStorage.setItem('idToken', res.token);
    localStorage.setItem('expiresIn', String(expiresIn));
  }
}
