import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrls: ['./search-transaction.component.scss'],
})
export class SearchTransactionComponent implements AfterViewInit {
  @ViewChild('search') search!: ElementRef;
  constructor(private transactionService: TransactionService) {}

  public ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe((event: any) => {
        this.transactionService.searchTransaction(event.target.value);
      });
  }
}
