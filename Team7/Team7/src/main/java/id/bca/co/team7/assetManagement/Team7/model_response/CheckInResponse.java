package id.bca.co.team7.assetManagement.Team7.model_response;

import id.bca.co.team7.assetManagement.Team7.model.Asset;
import id.bca.co.team7.assetManagement.Team7.model.Warehouse;

import javax.persistence.*;
import java.util.Date;

public class CheckInResponse {
    private int id;

    @ManyToOne
    @JoinColumn(name = "asset_id")
    private Asset asset_id;

    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse_id;

    private Date tanggal_masuk;

    private int jumlah;
}
