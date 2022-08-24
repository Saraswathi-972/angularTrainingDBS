import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { CurrencyComponent } from './components/currency/currency.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { HttpClientModule} from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { LoginComponent } from './containers/login/login.component';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    ConversionPipe,
    CurrencyComponent,
    CheckoutComponent,
    ErrorPageComponent,
    ProductDetailComponent,
    NumbersOnlyDirective,
    LoginComponent,
    LoginButtonsComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
