package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model_response.ReportResponse;
import id.bca.co.team7.assetManagement.Team7.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class ReportController {
    @Autowired
    ReportRepository reportRepository;
    @GetMapping("reports")
    @ResponseStatus(HttpStatus.OK)
    public List<ReportResponse> findAll(){return reportRepository.getDataReport();}
}
