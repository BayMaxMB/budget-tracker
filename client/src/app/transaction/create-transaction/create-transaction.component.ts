import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent {
  public createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    expireAt: new FormControl('', [Validators.required]),
  });
  constructor(private transactionService: TransactionService) {}

  public onSubmit(formRef: FormGroupDirective): void {
    const { value } = this.createForm;
    const newTransaction = {
      name: value.name,
      description: value.description,
      createdAt: new Date().toISOString(),
      expireAt: value.expireAt,
      isDone: false,
    };
    this.transactionService
      .createTransaction(newTransaction)
      .subscribe((res: string) => {
        console.log(res);
        this.createForm.reset();
        formRef.resetForm();
      });
  }
}
