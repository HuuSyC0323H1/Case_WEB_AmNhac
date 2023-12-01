package com.huusy.casespring3java17.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class Register {
    private String userName;
//    (?=.*[a-z]): Yêu cầu ít nhất một chữ cái thường.
//            (?=.*[A-Z]): Yêu cầu ít nhất một chữ cái in hoa.
//            (?=.*\\d): Yêu cầu ít nhất một chữ số.
//            (?=.*[@$!%*?&]): Yêu cầu ít nhất một ký tự đặc biệt từ danh sách @$!%*?&.
//            [A-Za-z\\d@$!%*?&]{8,}: Yêu cầu một độ dài tối thiểu là 8 ký tự và có thể chứa chữ cái, số, và các ký tự đặc biệt từ danh sách.
    @Size(min = 8, message = "Password should be at least 8 characters long")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", message = "Password must meet:<br/>" +
            "- Requires at least one lowercase letter.<br/>" +
            "- Requires at least one capital letter.<br/>" +
            "- Requires at least one digit.<br/>" +
            "- Requires at least one special character from the list.<br/>" +
            "- Requires a minimum length of 8 characters and can contain letters, numbers, and special characters from the list")
    private String password;

    @Email(message = "Email should be valid")
    @Pattern(regexp = "(([^<>()\\[\\]\\\\.,;:\\s+@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(gmail\\.com|example\\.com\\.vn|microsoft\\.com\\.vn)", message = "Email should end with @gmail.com")
    private String email;

    @Pattern(regexp = "^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$")
    private String phone;

    private Date created;

    private boolean status = true;

    private Set<String> listRoles = new HashSet<>();
}
