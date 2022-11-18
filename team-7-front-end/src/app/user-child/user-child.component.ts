import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {
  @Input() userChild!: User[]
  constructor(private userService: UserService, private router: Router) { }
  deleteUser(id: number): void {
    let index = this.userChild.findIndex(d => d.id === id)
    this.userService.deleteUser(id).subscribe(a => this.userChild.splice(index, 1))
  }
  update(id: number) {
    this.router.navigateByUrl('/user-update/:id', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/user-update', id])
    })
  }

  ngOnInit(): void {
  }

}
