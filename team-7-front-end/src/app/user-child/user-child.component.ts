import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {
  @Input() userChild!: User[]
  constructor() { }

  ngOnInit(): void {
  }

}
