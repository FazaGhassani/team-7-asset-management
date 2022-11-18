package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.CheckIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CheckInRepository extends JpaRepository<CheckIn,Integer> {
    //CheckIn findCheckInBy(int id);
    @Query(value = "select sum(jumlah) as jumlah from CheckIn a where a.asset_id =?1  and a.warehouse_id = ?2 ", nativeQuery = true)
    int getJumlahByAssetandWarehouse(Integer  assetId, Integer  WarehouseId);

    //CheckIn getCheckInByAsset_IdAndWarehouse_Id(Integer asset, Integer warehouse);
    Optional<CheckIn> getCheckInByAsset_IdAndWarehouse_Id(Integer asset, Integer warehouse);
}
