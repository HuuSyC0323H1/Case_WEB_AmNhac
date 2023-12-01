package com.huusy.casespring3java17.repository;

import com.huusy.casespring3java17.model.account.ERole;
import com.huusy.casespring3java17.model.account.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles,Long> {
    Optional<Roles> findByRoleName(ERole roleName);
}
