package com.huusy.casespring3java17.model.account;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "Users")
@NoArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "user_name", unique = true, nullable = false)
    private String userName;

    @Column(name = "password",nullable = false)
    @JsonIgnore
    private String password;

    @Column(name = "creat_date")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date date;

    @Column(name = "email",nullable = false,unique = true)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "high_school")
    private String highSchool;

    @Column(name = "university")
    private String university;


    @Column(name = "user_status")
    private boolean userStatus;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "User_Role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Roles> listRoles = new HashSet<>();

    public Users(String username, String email, String password) {
        this.userName = username;
        this.email = email;
        this.password = password;
    }

}
