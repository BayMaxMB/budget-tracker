import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public accounts: string = '';
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService
      .getAccounts()
      .subscribe((data) => (this.accounts = JSON.stringify(data, null, '\t')));
  }
}
