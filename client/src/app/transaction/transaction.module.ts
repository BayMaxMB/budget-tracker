import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTransactionComponent } from './search-transaction/search-transaction.component';

const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionListComponent,
    CreateTransactionComponent,
    SearchTransactionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class TransactionModule {}
