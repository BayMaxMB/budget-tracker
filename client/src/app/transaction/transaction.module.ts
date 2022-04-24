import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [TransactionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TransactionModule {}
