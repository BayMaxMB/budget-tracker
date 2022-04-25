import { Injectable } from '@angular/core';
import { ITransactionItem } from '../models/transaction-item.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: ITransactionItem[] = [
    {
      name: 'Shopping',
      description: 'Buy some groceries',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      isDone: false,
    },
    {
      name: 'Shopping2',
      description: 'Buy some groceries',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      isDone: false,
    },
    {
      name: 'Shopping3',
      description: 'Buy some groceries',
      createdAt: new Date().toISOString(),
      expireAt: new Date(2022, 3, 9).toISOString(),
      isDone: false,
    },
  ];
  constructor() {}
}
