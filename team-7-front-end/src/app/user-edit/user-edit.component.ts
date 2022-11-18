import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserModel } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  namePage: string = "Update User Data"
  modelUser = new UserModel(0, '', '', '')
  submitted = false
  user: User[] = []
  idUser: any
  roles = ['Admin', 'Guest']
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id')
    this.getUserById(this.idUser)
  }
  getUserById(id: string) {
    try {
      this.userService.getUserById(id).subscribe((res) => {
        //this.freelancer = res;
        this.modelUser.id = res.id;
        this.modelUser.username = res.username;
        this.modelUser.password = res.password;
        this.modelUser.role = res.role;
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }
  updateUser(
    id: number = this.modelUser.id,
    username: string = this.modelUser.username,
    password: string = this.modelUser.password,
    role: string = this.modelUser.role
  ): void {
    this.userService.editUser({ id, username, password, role }).subscribe(res => { this.user.push(res); this.redirectTo('/user') },
      err => { alert("ERROR! Mohon dicek kembali"); this.redirectTo('/user-update/' + id) })
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  onSubmit() {
    this.submitted = true;
    this.updateUser();
  }
  goBack(): void {
    this.location.back()
  }

}
