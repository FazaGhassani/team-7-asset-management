import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  namePage: string = "Form Add new User"
  user: User[] = []
  modelUser = new UserModel(0, '', '', 'admin')
  submitted = false;
  constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.user = []
  }

  onSubmit() {
    this.submitted = true;
    this.addUser();
  }

  addUser(
    id: number = this.modelUser.id,
    username: string = this.modelUser.username,
    password: string = this.modelUser.password,
    role: string = this.modelUser.role
  ): void {
    username = username.trim()
    password = password.trim()
    role = role.trim()
    if (!username || !password || !role) { return }
    this.userService.addUser({ id, username, password, role } as User).subscribe(usr => { this.user.push(usr) })
    this.user = []
  }
  goBack(): void {
    this.location.back()
  }

}
