package com.huusy.casespring3java17.service.impl;

import com.huusy.casespring3java17.model.account.Users;
import com.huusy.casespring3java17.repository.UserRepository;
import com.huusy.casespring3java17.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public Users findByUserName(String username) {
        return userRepository.findByUserName(username);
    }

    @Override
    public Users saveOrUpdate(Users users) {
        return userRepository.save(users);
    }

    @Override
    public boolean existsByUserName(String username) {
        return userRepository.existsByUserName(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
