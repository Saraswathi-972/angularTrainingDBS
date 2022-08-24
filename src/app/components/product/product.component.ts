import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data!: ProductType;
@Output() btnClick=new EventEmitter();
@Input() currencyCode="INR";
  constructor() { }
  notifyParent(){
    this.btnClick.emit({
      id: this.data.productId,
      name: this.data.productName,
    });
  }
  ngOnInit(): void {
  }

}
