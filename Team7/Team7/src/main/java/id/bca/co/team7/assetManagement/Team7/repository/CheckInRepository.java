package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.CheckIn;
import id.bca.co.team7.assetManagement.Team7.model.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckInRepository extends JpaRepository<CheckIn,Integer> {
    //CheckIn findCheckInBy(int id);
}
