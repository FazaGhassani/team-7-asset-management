import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDetail } from '../model/report';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  namePage: string = "Report Detail"
  reportDetail: ReportDetail[] = []
  constructor(private reportService: ReportService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getReportDetail()
  }
  getReportDetail() {
    const asset_id = Number(this.route.snapshot.queryParamMap.get('asset_id'))
    const warehouse_id = Number(this.route.snapshot.queryParamMap.get('warehouse_id'))
    this.reportService.getReportDetail(asset_id, warehouse_id).subscribe(a => this.reportDetail = a)
  }

}
