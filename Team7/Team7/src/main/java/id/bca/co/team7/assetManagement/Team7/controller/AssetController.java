package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model.Asset;
import id.bca.co.team7.assetManagement.Team7.model.Warehouse;
import id.bca.co.team7.assetManagement.Team7.model_request.AssetRequest;
import id.bca.co.team7.assetManagement.Team7.repository.AssetRepository;
import id.bca.co.team7.assetManagement.Team7.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    WarehouseRepository warehouseRepository;

    @GetMapping("assets")
    @ResponseStatus(HttpStatus.OK)
    public List<Asset> findAll(){ return assetRepository.findAll();}

    @GetMapping("assets/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Asset> findById(@PathVariable("id") int id){ return assetRepository.findById(id);}

    @DeleteMapping("assets/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteAsset(@PathVariable("id") int id){ assetRepository.deleteById(id);}

    @PostMapping("assets")
    @ResponseStatus(HttpStatus.OK)
    public Asset addAsset(@RequestBody AssetRequest assetRequest){
        Asset asset = new Asset();

        asset.setName(assetRequest.getName());
        asset.setDescription(assetRequest.getDescription());
        asset.setBarcode(assetRequest.getBarcode());
        return assetRepository.save(asset);

    }

    @PutMapping("assets/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Asset updateAsset(@PathVariable("id") int id, @RequestBody AssetRequest assetRequest){
        Asset asset = new Asset();
        asset.setId(id);
        asset.setName(assetRequest.getName());
        asset.setDescription(assetRequest.getDescription());
        asset.setBarcode(assetRequest.getBarcode());
        return assetRepository.save(asset);
    }
}
