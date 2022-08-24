import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}
  doLogin() {
    const email: any = this.loginForm.value.email;
    const password: any = this.loginForm.value.password;
    this.userService.login(email, password).subscribe(
      (data) => {
        console.log('LOGIN SUCCESS', data);
        this.userService.createUserSession(data);
        this.router.navigate(['/product']);
      },
      (error) => {
        console.log('LOGIN FAILURE', error);
      }
    );
  }
}
