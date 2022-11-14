package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.CheckOut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CheckOutRepository extends JpaRepository<CheckOut,Integer> {
    //CheckOut findCheckOutById(int id);
    @Query(value = "select sum(jumlah) as jumlah from CheckOut a where a.asset_id =?1  and a.warehouse_id = ?2 ", nativeQuery = true)
    Integer getJumlahByAssetandWarehouse(Integer assetId, Integer WarehouseId);
}
