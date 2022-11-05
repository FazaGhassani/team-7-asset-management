package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.CheckOut;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckOutRepository extends JpaRepository<CheckOut,Integer> {
    //CheckOut findCheckOutById(int id);
}
