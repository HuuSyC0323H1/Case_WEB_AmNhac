package com.huusy.casespring3java17.service.impl;

import com.huusy.casespring3java17.model.account.ERole;
import com.huusy.casespring3java17.model.account.Roles;
import com.huusy.casespring3java17.repository.RoleRepository;
import com.huusy.casespring3java17.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Optional<Roles> findByRoleName(ERole roleName) {
        return roleRepository.findByRoleName(roleName);
    }
}