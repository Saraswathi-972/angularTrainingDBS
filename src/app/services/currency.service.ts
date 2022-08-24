import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _code: string = 'INR';
  // any information that we want to share using observables, is claimed to be a subject
  private currencySubject = new BehaviorSubject(this._code);
  // we can now create a custom observable using the subject
  // any component that wants to get the currency code, should subscribe to this observable
  currencyObservable = this.currencySubject.asObservable();
  constructor() {}
  changeCurrency(code: string) {
    this._code = code;
    // on every data change, you need to publish the data changes to the subscriber
    // we need to provide a notification to the subscribers
    this.currencySubject.next(this._code); // publishing the next currency code
  }
}
