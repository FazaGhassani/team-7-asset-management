import { Component, OnInit } from '@angular/core';
import {Checkin} from "../model/checkin";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CheckinService} from "../service/checkin.service";

@Component({
  selector: 'app-checkin-parent',
  templateUrl: './checkin-parent.component.html',
  styleUrls: ['./checkin-parent.component.css']
})
export class CheckinParentComponent implements OnInit {
  namePage: string = "Check-In Menu";
  checkins : Checkin[] = [];

  constructor(private checkinService: CheckinService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkins = [];
    this.getCheckIn();
  }

  getCheckIn(): void {
    this.checkinService.getCheckins()
      .subscribe(res => {
        this.checkins = res;
        console.log(this.checkins);
      });
  }

}
