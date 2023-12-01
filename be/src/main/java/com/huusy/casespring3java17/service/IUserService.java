package com.huusy.casespring3java17.service;

import com.huusy.casespring3java17.model.account.Users;

public interface IUserService {
    Users findByUserName(String username);
    Users saveOrUpdate(Users  users);
    boolean existsByUserName(String username);
    boolean existsByEmail(String email);
}
