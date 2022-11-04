package id.bca.co.team7.assetManagement.Team7.model_response;

import id.bca.co.team7.assetManagement.Team7.model.Warehouse;

import javax.persistence.*;

public class AssetResponse {

    private int id;

    private String name;

    private String description;

    private String barcode;

    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;
}
