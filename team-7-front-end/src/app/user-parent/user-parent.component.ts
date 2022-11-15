import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-parent',
  templateUrl: './user-parent.component.html',
  styleUrls: ['./user-parent.component.css']
})
export class UserParentComponent implements OnInit {
  namePage: string = "User Menu"
  user: User[] = []
  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = []
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(usr => this.user = usr)
  }
  goBack(): void {
    this.location.back()
  }

}
