import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ITransactionItem } from '../models/transaction-item.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private spinnerService: SpinnerService
  ) {}
  public transactionSubcription!: Subscription;
  public transactions!: ITransactionItem[];

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    this.transactionSubcription = this.transactionService
      .getTransactions()
      .subscribe((value: ITransactionItem[]) => {
        this.transactions = value;
        this.spinnerService.hideSpinner();
      });
  }
}
