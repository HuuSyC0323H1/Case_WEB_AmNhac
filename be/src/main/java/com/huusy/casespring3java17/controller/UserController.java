package com.huusy.casespring3java17.controller;

import com.huusy.casespring3java17.dto.request.Login;
import com.huusy.casespring3java17.dto.request.Register;
import com.huusy.casespring3java17.dto.response.JwtResponse;
import com.huusy.casespring3java17.dto.response.MessageResponse;
import com.huusy.casespring3java17.security.jwt.JwtUtils;
import com.huusy.casespring3java17.service.impl.AuthService;
import com.huusy.casespring3java17.service.impl.RoleService;
import com.huusy.casespring3java17.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/auth")
public class UserController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    UserService userService;
    @Autowired
    RoleService roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody Login loginRequest) {
        try {
            JwtResponse jwtResponse = authService.authenticateUser(loginRequest);
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtResponse.getJwtCookie()).body(jwtResponse);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Register signUpRequest) {
        try {
            MessageResponse response = authService.registerUser(signUpRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        try {
            MessageResponse response = authService.logoutUser();
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, response.getMessage()).body(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

}
