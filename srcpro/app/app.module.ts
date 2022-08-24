import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderDetailsComponent } from './components/sender-details/sender-details.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ReceiverDetailsComponent } from './components/receiver-details/receiver-details.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ErrorComponent } from './components/error/error.component';
import { WeekendComponent } from './components/weekend/weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderDetailsComponent,
    SenderDetailsComponent,
    OnlyNumberDirective,
    ReceiverDetailsComponent,
    TransactionComponent,
    ErrorComponent,
    WeekendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
