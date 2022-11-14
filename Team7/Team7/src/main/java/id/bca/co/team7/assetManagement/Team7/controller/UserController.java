package id.bca.co.team7.assetManagement.Team7.controller;

import id.bca.co.team7.assetManagement.Team7.model.User;
import id.bca.co.team7.assetManagement.Team7.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class UserController {
    @Autowired
    UsersRepository usersRepository;

    @GetMapping("users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> findAll(){ return usersRepository.findAll();}

    @GetMapping("users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<User> findById(@PathVariable("id") int id){ return usersRepository.findById(id);}

    @DeleteMapping("users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("id") int id){ usersRepository.deleteById(id);}

    @PostMapping("users")
    @ResponseStatus(HttpStatus.OK)
    public User addUser(@RequestBody User user){
        return usersRepository.save(user);
    }

    @PutMapping("users/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User updateUser(@PathVariable("id") int id, @RequestBody User user){
        user.setId(id);
        return usersRepository.save(user);
    }
}
