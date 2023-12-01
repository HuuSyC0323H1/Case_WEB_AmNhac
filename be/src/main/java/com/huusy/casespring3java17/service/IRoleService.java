package com.huusy.casespring3java17.service;



import com.huusy.casespring3java17.model.account.ERole;
import com.huusy.casespring3java17.model.account.Roles;

import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findByRoleName(ERole roleName);

}
