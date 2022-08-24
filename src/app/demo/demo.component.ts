import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  demodata: string= 'testdata';
  allowedDigits=6;
  constructor() { }

  ngOnInit(): void {
  }
  showalert(){
    alert("Hello World");
    this.demodata="Hello World";
  }

}
