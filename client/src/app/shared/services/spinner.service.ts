import { Injectable } from '@angular/core';
import { asyncScheduler, BehaviorSubject, Observable, Subject } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isSpinnerVisible$: Subject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  public getIsSpinnerVisible$(): Observable<boolean> {
    return this.isSpinnerVisible$
      .asObservable()
      .pipe(observeOn(asyncScheduler));
  }

  public showSpinner(): void {
    this.isSpinnerVisible$.next(true);
  }

  public hideSpinner(): void {
    this.isSpinnerVisible$.next(false);
  }
}
