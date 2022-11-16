package id.bca.co.team7.assetManagement.Team7.model_response;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface ReportResponse {
    @JsonProperty("asset")
    String getAssetName();

    @JsonProperty("warehouse")
    String getWarehouseName();

    @JsonProperty("jumlah_checkin")
    String getCheckinJml();

    @JsonProperty("jumlah_checkout")
    String getCheckoutJml();
    @JsonProperty("asset_id")
    String getAssetId();
    @JsonProperty("warehouse_id")
    String getWarehouseId();
}
