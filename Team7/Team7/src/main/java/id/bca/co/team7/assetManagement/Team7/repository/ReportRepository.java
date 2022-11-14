package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.Asset;
import id.bca.co.team7.assetManagement.Team7.model_response.ReportResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface ReportRepository extends JpaRepository<Asset,Integer>{
    @Query(value = "SELECT " +
                    "ast.name as assetName," +
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
}
