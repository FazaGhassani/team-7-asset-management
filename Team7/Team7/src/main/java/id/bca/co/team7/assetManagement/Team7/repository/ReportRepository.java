package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.Asset;
import id.bca.co.team7.assetManagement.Team7.model_response.ReportDetailResponse;
import id.bca.co.team7.assetManagement.Team7.model_response.ReportResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface ReportRepository extends JpaRepository<Asset,Integer>{
    @Query(value = "SELECT " +
                    "ast.id as assetId, " +
                    "ast.name as assetName, " +
                    "wrhs.id as warehouseId, " +
                    "wrhs.name as warehouseName, " +
                    "ckin.jumlah as checkinJml, " +
                    "sum(ckout.jumlah) as checkoutJml " +
                    "FROM asset ast " +
                    "INNER JOIN checkin ckin on ast.id = ckin.asset_id " +
                    "INNER JOIN checkout ckout on ast.id = ckout.asset_id " +
                    "INNER JOIN warehouse wrhs on wrhs.id = ckin.warehouse_id and wrhs.id = ckout.warehouse_id " +
                    "GROUP BY ast.name, wrhs.name",
            nativeQuery = true)
    List<ReportResponse> getDataReport();

    @Query(value = "SELECT " +
                    "type, " +
                    "    asset_id as assetId, " +
                    "    asset_name as assetName, " +
                    "    warehouse_id as warehouseId, " +
                    "    warehouse_name as warehouseName, " +
                    "    tanggal, " +
                    "    jumlah " +
                    "FROM( " +
                    "    SELECT " +
                    "    \"checkin\" as type, " +
                    "        ckin.asset_id, " +
                    "        ast.name as asset_name, " +
                    "        ckin.warehouse_id, " +
                    "        whrs.name as warehouse_name, " +
                    "        ckin.tanggal_masuk as tanggal, " +
                    "        ckin.jumlah as jumlah " +
                    "    FROM checkin ckin " +
                    "    inner join asset ast on ast.id = ckin.asset_id " +
                    "    inner join warehouse whrs on whrs.id = ckin.warehouse_id " +
                    "    UNION ALL " +
                    "    SELECT " +
                    "        \"checkout\" as type, " +
                    "        ckout.asset_id, " +
                    "        ast.name as asset_name, " +
                    "        ckout.warehouse_id, " +
                    "        whrs.name as warehouse_name, " +
                    "        ckout.tanggal_keluar as tanggal, " +
                    "        ckout.jumlah as jumlah " +
                    "    FROM checkout ckout " +
                    "    inner join asset ast on ast.id = ckout.asset_id " +
                    "    inner join warehouse whrs on whrs.id = ckout.warehouse_id " +
                    ") a  " +
                    "WHERE asset_id=?1 AND warehouse_id=?1 " +
                    "ORDER BY `a`.`tanggal` ASC, `a`.`type` ASC", nativeQuery = true)
    List<ReportDetailResponse> getDataReportDetails(Integer  assetId, Integer  WarehouseId);
}
