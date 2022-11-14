package id.bca.co.team7.assetManagement.Team7.model_response;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface ReportResponse {
    @JsonProperty("AssetName")
    String getAssetName();

    @JsonProperty("WarehouseName")
    String getWarehouseName();

    @JsonProperty("JumlahCheckIn")
    String getCheckinJml();

    @JsonProperty("JumlahCheckOut")
    String getCheckoutJml();
}
