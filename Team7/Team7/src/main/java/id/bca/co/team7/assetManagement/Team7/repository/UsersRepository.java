package id.bca.co.team7.assetManagement.Team7.repository;

import id.bca.co.team7.assetManagement.Team7.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}
