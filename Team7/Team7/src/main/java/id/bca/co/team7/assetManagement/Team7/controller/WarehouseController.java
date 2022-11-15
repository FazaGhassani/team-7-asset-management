package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model.Warehouse;
import id.bca.co.team7.assetManagement.Team7.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class WarehouseController {
    @Autowired
    WarehouseRepository warehouseRepository;

    @GetMapping("warehouses")
    @ResponseStatus(HttpStatus.OK)
    public List<Warehouse> findAll(){ return warehouseRepository.findAll();}

    @GetMapping("warehouses/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Warehouse> findById(@PathVariable("id") int id){ return warehouseRepository.findById(id);}

    @DeleteMapping("warehouses/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteWarehouse(@PathVariable("id") int id){ warehouseRepository.deleteById(id);}

    @PostMapping("warehouses")
    @ResponseStatus(HttpStatus.OK)
    public Warehouse addWarehouse(@RequestBody Warehouse warehouse){
        return warehouseRepository.save(warehouse);
    }

    @PutMapping("warehouses/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Warehouse updateWarehouse(@PathVariable("id") int id, @RequestBody Warehouse warehouse){
        warehouse.setId(id);
        return warehouseRepository.save(warehouse);
    }
}
