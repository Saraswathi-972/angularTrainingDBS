import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
  styleUrls: ['./receiver-details.component.css']
})
export class ReceiverDetailsComponent implements OnInit {

  bicNumber = "";
  accHolderName="";
  accNumber="";

  rApiData:any={
    bankName:""
  }

  isDisabled = true;

  isValidBIC:boolean=false;

  constructor(private router:Router, private accountService:AccountService) { }

  ngOnInit(): void {
  }

 checkBIC(){

  // this.accountService.createReceiverSession(this.rApiData);

  this.accountService.checkBicService(this.bicNumber).subscribe(
      (data) => {
        console.log('LOGIN SUCCESS', data);
        this.rApiData=data;
        this.accountService.createReceiverSession(data);
        this.isValidBIC=true;
        // this.router.navigate(['/'])
        
      },
      (error) => {
        console.log('LOGIN FAILURE', error);
        alert("BIC NOt FOund")
      }
    );
 }  

 checkSanction(){
  console.log(this.accHolderName)
  console.log(this.accNumber)

  this.accountService.sanctionService(this.accHolderName).subscribe(
    (data) => {
      if(data.message==="Found"){
        // this.router.navigate(['/'])
        // window.alert("BIC Not Valid")
      }
      else{
      console.log('LOGIN SUCCESS', data);
      localStorage.setItem("accHolderName",JSON.stringify(this.accHolderName))
      localStorage.setItem("accHolderNumber",JSON.stringify(this.accNumber))  
      this.router.navigate(['/transaction'])    
      // this.accountService.createUserSession(data);
      // this.isValidBIC=true;
      // this.router.navigate(['/'])
      }
    },
    (error) => {
      console.log('LOGIN FAILURE', error);
    }
  );

  // this.router.navigate(['/transaction'])
 }

  checkBICLen(){
    let l=this.bicNumber.toString().length;
    if(l==11 || l>11){
      this.isDisabled = false;
      // this.isValidBIC=true;
    }else{
      this.isDisabled = true;
      this.isValidBIC=false;

    }
    console.log(this.bicNumber);
    
  }

}
