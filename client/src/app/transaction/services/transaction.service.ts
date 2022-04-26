import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { ITransactionItem } from '../models/transaction-item.model';
import { delay, tap } from 'rxjs/operators';

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
      isDone: true,
    },
  ];

  constructor() {}

  public transactions$: Subject<ITransactionItem[]> = new BehaviorSubject([...this.transactions]);
  public getTransactions(): Observable<ITransactionItem[]> {
    return this.transactions$.asObservable().pipe(
      delay(500) // Todo: Get data from BE, remove spinner and delay
    );
  }

  createTransaction(newTransaction: ITransactionItem): Observable<string> {
    //http.post => Observable Emulated as new Observable
    return new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Success');
    }).pipe(
      delay(1000), // Todo: remove delay after real BE post req
      tap(() => {
        this.transactions.push(newTransaction);
        this.transactions$.next([...this.transactions]);
      })
    )
  }
  public searchTransaction(str: string): void {
    const filteredTasks = this.transactions.filter((transactionItem: ITransactionItem) =>
      transactionItem.name.includes(str)
    );
    this.transactions$.next(filteredTasks);
  }
}
