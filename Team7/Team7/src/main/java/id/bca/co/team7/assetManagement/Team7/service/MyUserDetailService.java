package id.bca.co.team7.assetManagement.Team7.service;


import id.bca.co.team7.assetManagement.Team7.model.MyUserDetail;
import id.bca.co.team7.assetManagement.Team7.model.User;
import id.bca.co.team7.assetManagement.Team7.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MyUserDetailService implements UserDetailsService {
    @Autowired
    UsersRepository usersRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.findByUsername(username);
        if(user==null){
            throw new UsernameNotFoundException("Username not found!");
        }
        return new MyUserDetail(user);
    }
}
