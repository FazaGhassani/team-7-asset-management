package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model.CheckIn;
import id.bca.co.team7.assetManagement.Team7.model_request.CheckInRequest;
import id.bca.co.team7.assetManagement.Team7.repository.AssetRepository;
import id.bca.co.team7.assetManagement.Team7.repository.CheckInRepository;
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
public class CheckInController {
    @Autowired
    CheckInRepository checkInRepository;

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    WarehouseRepository warehouseRepository;

    @GetMapping("checkins")
    @ResponseStatus(HttpStatus.OK)
    public List<CheckIn> findAll(){ return checkInRepository.findAll();}

    @GetMapping("checkins/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<CheckIn> findById(@PathVariable("id") int id){ return checkInRepository.findById(id);}

    @GetMapping("checkins/asset/{id}/warehouse/{id2}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<CheckIn> getCheckInByAsset_IdAndWarehouse_Id(@PathVariable("id") int id, @PathVariable("id2") int id2){ return checkInRepository.getCheckInByAsset_IdAndWarehouse_Id(id,id2);}

    @DeleteMapping("checkins/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCheckIn(@PathVariable("id") int id){ checkInRepository.deleteById(id);}

    @PostMapping("checkins")
    @ResponseStatus(HttpStatus.OK)
    public CheckIn addAsset(@RequestBody CheckInRequest checkInRequest){
        CheckIn checkIn = new CheckIn();
        if(!warehouseRepository.findById(checkInRequest.getWarehouse_id()).isEmpty()){
            if(!assetRepository.findById(checkInRequest.getAsset_id()).isEmpty()){
                //CheckIn a = new CheckIn();
                //a = checkInRepository.getCheckInByAsset_IdAndWarehouse_Id(checkInRequest.getAsset_id(), checkInRequest.getWarehouse_id());
                //if(a == null){ //pengecekan apakah sudah pernah insert atau belum
                    checkIn.setWarehouse(warehouseRepository.findWarehouseById(checkInRequest.getWarehouse_id()));
                    checkIn.setAsset(assetRepository.findAssetById(checkInRequest.getAsset_id()));
                    checkIn.setTanggal_masuk(new Date());
                    checkIn.setJumlah(checkInRequest.getJumlah());
                    return checkInRepository.save(checkIn);
                //}else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Data CheckIn can be only one!");}
            }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Asset Not Found!");}
        }else{throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Warehouse Not Found!");}
    }

    @PutMapping("checkins/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CheckIn updateCheckOut(@PathVariable("id") int id, @RequestBody CheckInRequest checkInRequest){
        CheckIn checkIn = new CheckIn();
        checkIn.setId(id);
        if(!warehouseRepository.findById(checkInRequest.getWarehouse_id()).isEmpty()){
            if(!assetRepository.findById(checkInRequest.getAsset_id()).isEmpty()){
                checkIn.setWarehouse(warehouseRepository.findWarehouseById(checkInRequest.getWarehouse_id()));
                checkIn.setAsset(assetRepository.findAssetById(checkInRequest.getAsset_id()));
                checkIn.setTanggal_masuk(new Date());
                checkIn.setJumlah(checkInRequest.getJumlah());
                return checkInRepository.save(checkIn);
            }else{
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Asset Not Found!");
            }
        }
        else{
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Warehouse Not Found!");
        }
    }
}
