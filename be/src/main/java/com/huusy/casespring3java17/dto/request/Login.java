package com.huusy.casespring3java17.dto.request;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Getter
public class Login {
    private String userName;

    private String password;

    @Email(message = "Email should be valid")
    @Pattern(regexp = "(([^<>()\\[\\]\\\\.,;:\\s+@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(gmail\\.com|example\\.com\\.vn|microsoft\\.com\\.vn)", message = "Email should end with @gmail.com")
    private String email;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
