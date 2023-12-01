package com.huusy.casespring3java17.model.app;

import com.huusy.casespring3java17.model.account.Users;
import lombok.Data;

import jakarta.persistence.*;
@Entity
@Data
@Table(name = "friends")
public class Friend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;
}
