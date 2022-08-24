import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent implements OnInit {
  isLoggedIn = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.userObservable.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  signOut() {
    this.userService.logout();
  }
}
