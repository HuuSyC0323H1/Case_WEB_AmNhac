package com.huusy.casespring3java17.controller;

import com.huusy.casespring3java17.dto.request.Login;
import com.huusy.casespring3java17.dto.request.Register;
import com.huusy.casespring3java17.dto.response.JwtResponse;
import com.huusy.casespring3java17.dto.response.MessageResponse;
import com.huusy.casespring3java17.model.account.ERole;
import com.huusy.casespring3java17.model.account.Roles;
import com.huusy.casespring3java17.model.account.Users;
import com.huusy.casespring3java17.security.UserDetailsImpl;
import com.huusy.casespring3java17.security.jwt.JwtUtils;
import com.huusy.casespring3java17.service.impl.RoleService;
import com.huusy.casespring3java17.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

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

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody Login loginRequest) {
        try {
            if (loginRequest.getUserName() != null && !loginRequest.getUserName().isEmpty()){
                Authentication authentication = authenticationManager
                        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));

                SecurityContextHolder.getContext().setAuthentication(authentication);

                UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

                ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

                List<String> roles = userDetails.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList());

                return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                        .body(new JwtResponse(
                                        userDetails.getUsername(),
                                        userDetails.getPassword(),
                                        userDetails.getEmail(),
                                        userDetails.getPhone(),
                                        roles
                                )
                        );
            }
        }catch (AuthenticationException authenticationException){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
        }
        return null;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Register signUpRequest) {
        String userName = signUpRequest.getFirstName().toLowerCase() + signUpRequest.getLastName().toLowerCase();
        if (userService.existsByUserName(userName)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userService.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
        }

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Password do not match"));
        }

        Users user = new Users();
        user.setUserName(userName);
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setUserStatus(true);
        SimpleDateFormat sdf =new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();
        String strNow = sdf.format(date);
        try {
            user.setDate(sdf.parse(strNow));
        }catch (Exception e){
            e.printStackTrace();
        }

        Set<String> strRoles = signUpRequest.getListRoles();
        Set<Roles> roles = new HashSet<>();

        if (strRoles == null || strRoles.isEmpty()) {
            Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                if (role.equals("admin")) {
                    Roles adminRole = roleService.findByRoleName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                } else {
                    Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(userRole);
                }
            });
        }

        user.setListRoles(roles);
        userService.saveOrUpdate(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(new MessageResponse("You've been signed out!"));
    }

}
