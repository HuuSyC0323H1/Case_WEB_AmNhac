package com.huusy.casespring3java17.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class JwtResponse {
    private String token;
    private String jwtCookie;
    private String type = "Barren";
    private String username;
    private String password;
    private String email;
    private String phone;


    private List<String> listRoles;

    public JwtResponse(String token, String jwtCookie, String username, String password, String email, String phone, List<String> listRoles) {
        this.token = token;
        this.jwtCookie = jwtCookie;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.listRoles = listRoles;
    }

    public void setJwtCookie(String jwtCookie) {
        this.jwtCookie = jwtCookie;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setListRoles(List<String> listRoles) {
        this.listRoles = listRoles;
    }
}
