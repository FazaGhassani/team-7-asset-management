import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role = localStorage.getItem('role')
  constructor(private loginService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.loginService.logout()
  }

}
