import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCode = 'INR';
  setCurrency(code: string) {
    this.selectedCode = code;
  }
}
