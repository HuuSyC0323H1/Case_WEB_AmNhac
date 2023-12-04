package com.huusy.casespring3java17.service.impl;

import com.huusy.casespring3java17.dto.request.Login;
import com.huusy.casespring3java17.dto.request.Register;
import com.huusy.casespring3java17.dto.response.JwtResponse;
import com.huusy.casespring3java17.dto.response.MessageResponse;
import com.huusy.casespring3java17.model.account.ERole;
import com.huusy.casespring3java17.model.account.Roles;
import com.huusy.casespring3java17.model.account.Users;
import com.huusy.casespring3java17.security.UserDetailsImpl;
import com.huusy.casespring3java17.security.jwt.JwtUtils;
import com.huusy.casespring3java17.service.IAuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService implements IAuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public JwtResponse authenticateUser(Login loginRequest) throws AuthenticationException {
        String jwtToken = null;
        UserDetailsImpl userDetails = null;
        List<String> roles = null;
        String jwtCookie = null;

        if (loginRequest.getUserName() != null && !loginRequest.getUserName().isEmpty()) {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            userDetails = (UserDetailsImpl) authentication.getPrincipal();

            if (userDetails != null) {
                jwtToken = jwtUtils.generateTokenFromUsername(userDetails.getUsername());
                jwtCookie = jwtUtils.generateJwtCookie(userDetails).getValue();
                roles = userDetails.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList());
            }
        }
        return new JwtResponse(jwtToken, jwtCookie, userDetails != null ? userDetails.getUsername() : null,
                userDetails != null ? userDetails.getPassword() : null, userDetails != null ? userDetails.getEmail() : null,
                userDetails != null ? userDetails.getPhone() : null, roles);    }

    @Override
    public MessageResponse registerUser(Register signUpRequest) {
        String userName = signUpRequest.getFirstName().toLowerCase() + signUpRequest.getLastName().toLowerCase();
        if (userService.existsByUserName(userName)) {
            return new MessageResponse("Error: Username is already taken!");
        }

        if (userService.existsByEmail(signUpRequest.getEmail())) {
            return new MessageResponse("Error: Email is already in use!");
        }

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())){
            return new MessageResponse("Error: Password do not match");
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
            Logger logger = LoggerFactory.getLogger(AuthService.class);
            logger.error("Error parsing date", e);
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
        return new MessageResponse("User registered successfully!");
    }

    @Override
    public MessageResponse logoutUser() {
        jwtUtils.getCleanJwtCookie();
        return new MessageResponse("You've been signed out!");
    }
}
