package com.huusy.casespring3java17.security;

import com.huusy.casespring3java17.model.account.Users;
import com.huusy.casespring3java17.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepository.findByUserName(username);
        if (users == null) {
            Users users1 = userRepository.findByEmail(username);
            if (users1 == null) {
                throw new UsernameNotFoundException("User not found with" + username);
            }
            return UserDetailsImpl.build(users1);
        }
        return UserDetailsImpl.build(users);
    }
}

