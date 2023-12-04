package com.huusy.casespring3java17.service;

import com.huusy.casespring3java17.dto.request.Login;
import com.huusy.casespring3java17.dto.request.Register;
import com.huusy.casespring3java17.dto.response.JwtResponse;
import com.huusy.casespring3java17.dto.response.MessageResponse;
import org.springframework.security.core.AuthenticationException;

public interface IAuthService {
        JwtResponse authenticateUser(Login loginRequest) throws AuthenticationException;

        MessageResponse registerUser(Register signUpRequest);

        MessageResponse logoutUser();

}
