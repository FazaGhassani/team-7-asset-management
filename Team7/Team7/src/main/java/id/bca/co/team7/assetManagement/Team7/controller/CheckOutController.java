package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model.CheckOut;
import id.bca.co.team7.assetManagement.Team7.model_request.CheckOutRequest;
import id.bca.co.team7.assetManagement.Team7.repository.AssetRepository;
import id.bca.co.team7.assetManagement.Team7.repository.CheckInRepository;
import id.bca.co.team7.assetManagement.Team7.repository.CheckOutRepository;
import id.bca.co.team7.assetManagement.Team7.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class CheckOutController {
    @Autowired
    CheckOutRepository checkOutRepository;

    @Autowired
    CheckInRepository checkInRepository;

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    WarehouseRepository warehouseRepository;

    @GetMapping("checkouts")
    @ResponseStatus(HttpStatus.OK)
    public List<CheckOut> findAll(){ return checkOutRepository.findAll();}

    @GetMapping("checkouts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<CheckOut> findById(@PathVariable("id") int id){ return checkOutRepository.findById(id);}

    @DeleteMapping("checkouts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCheckOut(@PathVariable("id") int id){ checkOutRepository.deleteById(id);}

    @PostMapping("checkouts")
    @ResponseStatus(HttpStatus.OK)
    public CheckOut addAsset(@RequestBody CheckOutRequest checkOutRequest){
        CheckOut checkOut = new CheckOut();
        if(!warehouseRepository.findById(checkOutRequest.getWarehouse_id()).isEmpty()){ //pengecekan warehouse
            if(!assetRepository.findById(checkOutRequest.getAsset_id()).isEmpty()){ //pengcekan asset
                int jmlCheckIn = checkInRepository.getJumlahByAssetandWarehouse(checkOutRequest.getAsset_id(),checkOutRequest.getWarehouse_id());
                int jmlCheckOut = checkOutRepository.getJumlahByAssetandWarehouse(checkOutRequest.getAsset_id(),checkOutRequest.getWarehouse_id())+checkOutRequest.getJumlah();
                if(jmlCheckIn >= jmlCheckOut){ //pengcekan apakah checkin > dari checout
                    checkOut.setWarehouse(warehouseRepository.findWarehouseById(checkOutRequest.getWarehouse_id()));
                    checkOut.setAsset(assetRepository.findAssetById(checkOutRequest.getAsset_id()));
                    checkOut.setTanggal_keluar(new Date());
                    checkOut.setJumlah(checkOutRequest.getJumlah());
                    return checkOutRepository.save(checkOut);
                }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Insufficient Total Amount of Jumlah CheckIn !");}
            }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Asset Not Found!");}
        }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Warehouse Not Found!");}
    }

    @PutMapping("checkouts/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CheckOut updateCheckOut(@PathVariable("id") int id, @RequestBody CheckOutRequest checkOutRequest){
        CheckOut checkOut = new CheckOut();
        checkOut.setId(id);
        if(!warehouseRepository.findById(checkOutRequest.getWarehouse_id()).isEmpty()){
            if(!assetRepository.findById(checkOutRequest.getAsset_id()).isEmpty()){
                int jmlCheckIn = checkInRepository.getJumlahByAssetandWarehouse(checkOutRequest.getAsset_id(),checkOutRequest.getWarehouse_id());
                int jmlCheckOut = checkOutRepository.getJumlahByAssetandWarehouse(checkOutRequest.getAsset_id(),checkOutRequest.getWarehouse_id())+checkOutRequest.getJumlah();
                if(jmlCheckIn >= jmlCheckOut){ //pengcekan apakah checkin > dari checout
                    checkOut.setWarehouse(warehouseRepository.findWarehouseById(checkOutRequest.getWarehouse_id()));
                    checkOut.setAsset(assetRepository.findAssetById(checkOutRequest.getAsset_id()));
                    checkOut.setTanggal_keluar(new Date());
                    checkOut.setJumlah(checkOutRequest.getJumlah());
                    return checkOutRepository.save(checkOut);
                }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Insufficient Total Amount of Jumlah CheckIn !");}
            }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Asset Not Found!");}
        }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Warehouse Not Found!");}
    }
}
