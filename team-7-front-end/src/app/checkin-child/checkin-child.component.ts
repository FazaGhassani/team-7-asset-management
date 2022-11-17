import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "../model/asset";
import {Checkin} from "../model/checkin";
import {CheckinService} from "../service/checkin.service";

@Component({
  selector: 'app-checkin-child',
  templateUrl: './checkin-child.component.html',
  styleUrls: ['./checkin-child.component.css']
})
export class CheckinChildComponent {
  constructor(private checkinService : CheckinService) {}
  @Input() chekinInList!: Checkin[];


  ngOnInit(): void {
  }

  //untuk delete ke API
  deleteCheckin(id: number):void{
    if(confirm("Are you sure you want to delete this data ?")){
      this.checkinService.deleteCheckin(id)
        .subscribe(res =>{
            this.chekinInList.forEach((checkin,index)=>{
              if(checkin.id==id) this.chekinInList.splice(index, 1);
            });
          }
        )
    }
  }

}
