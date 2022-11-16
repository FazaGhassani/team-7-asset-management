package id.bca.co.team7.assetManagement.Team7.model_request;

public class ReportDetailRequest {
    int asset_id;
    int warehouse_id;

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
}
