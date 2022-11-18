import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(public loginService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    (this.loginService.authenticate(this.username, this.password).subscribe(
      data => {
        if (data.status != "invalid") {

          localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
          localStorage.setItem('role', data.status);
          this.router.navigate([''])
          this.invalidLogin = false
        }
        else {
          this.invalidLogin = true
        }
      },
      error => {
        this.invalidLogin = true
      }
    )
    );

  }

}

