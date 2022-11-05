package id.bca.co.team7.assetManagement.Team7.model_request;

import id.bca.co.team7.assetManagement.Team7.model.Asset;
import id.bca.co.team7.assetManagement.Team7.model.Warehouse;

import javax.persistence.*;
import java.util.Date;

public class CheckOutRequest {

    private int id;

    private int asset_id;

    private int warehouse_id;

    private Date tanggal_keluar;

    private int jumlah;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAsset_id() {
        return asset_id;
    }

    public void setAsset_id(int asset_id) {
        this.asset_id = asset_id;
    }

    public int getWarehouse_id() {
        return warehouse_id;
    }

    public void setWarehouse_id(int warehouse_id) {
        this.warehouse_id = warehouse_id;
    }

    public Date getTanggal_keluar() {
        return tanggal_keluar;
    }

    public void setTanggal_keluar(Date tanggal_keluar) {
        this.tanggal_keluar = tanggal_keluar;
    }

    public int getJumlah() {
        return jumlah;
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }
}
