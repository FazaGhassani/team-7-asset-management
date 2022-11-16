import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-report-parent',
  templateUrl: './report-parent.component.html',
  styleUrls: ['./report-parent.component.css']
})
export class ReportParentComponent implements OnInit {
  namePage: string = "Report Menu"
  report: Report[] = []
  constructor(private reportService: ReportService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.report = []
    this.getReports()
  }
  getReports(): void {
    this.reportService.getReports().subscribe(rp => this.report = rp)
  }
  goBack(): void {
    this.location.back()
  }

}
