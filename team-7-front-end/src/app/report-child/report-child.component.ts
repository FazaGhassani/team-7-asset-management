import { Component, Input, OnInit } from '@angular/core';
import { Report, ReportDetail } from '../model/report';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-report-child',
  templateUrl: './report-child.component.html',
  styleUrls: ['./report-child.component.css']
})
export class ReportChildComponent implements OnInit {
  @Input() reportChild!: Report[]
  @Input() reportDetail!: ReportDetail[]
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }



}
