import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-7-front-end';
  public username = localStorage.getItem('username')
  public password = localStorage.getItem('password')
  public token = this.username + ":" + this.password
  constructor(public loginService: AuthenticationService) { }
}
