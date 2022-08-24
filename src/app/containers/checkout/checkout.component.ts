import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ProductService],
})
export class CheckoutComponent implements OnInit {
  emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    email: new FormControl('test@mail.com',[
    Validators.required,
    Validators.pattern(this.emailRegex),
    ]),
    pincode: new FormControl(null, [
      Validators.required,
      this.zipcodeValidator(),
    ]),
  });
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }
  zipcodeValidator() {
    return (control: FormControl) => {
      if (control.value == 123456 || !control.value) {
        // valid
        return null;
      }
      // invalid
    
      return {
        // name_of_error: information_related_to_error
        zipcode: {
          allowedCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }
//saveData() {
  //  if (this.checkoutForm.valid) {
    //  console.log('form submission logic here');
  //    console.log(this.checkoutForm.value);
//    }
 // }
  saveData() {
    if (this.checkoutForm.valid) {
      this.productService.doCheckout(this.checkoutForm.value).subscribe(
        (data) => {
          console.log('SUCCESS', data);
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
    }
  }
  loadData() {
    const data = {
      name: 'hello',
      email: 'hello@mail.com',
      pincode: 123456,
    };
    this.checkoutForm.setValue(data);
  }
  patchData() {
    const data = {
      name: 'demo',
      email: 'test@mail.com',
      pincode: 123456,
    };
    this.checkoutForm.patchValue(data); // partial data
  }
}
