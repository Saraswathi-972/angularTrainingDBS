import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyCodes = ['INR', 'USD', 'CAD', 'EUR', 'GBP'];
  @Output() selected=new EventEmitter();
  constructor(private currencyService: CurrencyService) {}
  ngOnInit(): void {
  }
  updateCurrency(event: Event){
    const ele=event.target as HTMLSelectElement;
    //this.selected.emit(ele.value);
    this.currencyService.changeCurrency(ele.value);
  }

}
