package com.huusy.casespring3java17.repository;

import com.huusy.casespring3java17.model.account.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    Users findByUserName(String username);
    Users findByEmail(String email);
    boolean existsByUserName(String username);
    boolean existsByEmail(String email);

}
