package id.bca.co.team7.assetManagement.Team7.model_response;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface ReportDetailResponse {

    @JsonProperty("type")
    String getType();

    @JsonProperty("asset_id")
    String getAssetId();

    @JsonProperty("asset")
    String getAssetName();

    @JsonProperty("warehouse_id")
    String getWarehouseId();

    @JsonProperty("warehouse")
    String getWarehouseName();

    @JsonProperty("tanggal")
    String getTanggal();

    @JsonProperty("jumlah")
    String getJumlah();

}
