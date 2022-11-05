package id.bca.co.team7.assetManagement.Team7.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="checkout")
public class CheckOut {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "asset_id")
    private Asset asset;

    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    @Column(name = "tanggal_keluar")
    private Date tanggal_keluar;

    @Column(name = "jumlah")
    private int jumlah;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Asset getAsset() {
        return asset;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
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
