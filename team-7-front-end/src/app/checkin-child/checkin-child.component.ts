import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "../model/asset";
import {Checkin} from "../model/checkin";

@Component({
  selector: 'app-checkin-child',
  templateUrl: './checkin-child.component.html',
  styleUrls: ['./checkin-child.component.css']
})
export class CheckinChildComponent {
  @Input() chekinInList!: Checkin[]
  constructor() {

  }

  ngOnInit(): void {

  }

}
