package com.spharos.pointapp.auth;

import com.spharos.pointapp.auth.vo.AuthenticationRequest;
import com.spharos.pointapp.auth.vo.AuthenticationResponse;
import com.spharos.pointapp.user.dto.UserSignUpDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(
            @RequestBody UserSignUpDto userSignUpDto
    ) {
        return ResponseEntity.ok(authenticationService.signup(userSignUpDto));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest authenticationRequest
    ) throws Exception {
        try {
            return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
        } catch (Exception e) {
            throw new Exception("Invalid username/password supplied");
        }
    }

    @PostMapping("/oauth/login")
    public ResponseEntity<AuthenticationResponse> oAuthLogin(
            @RequestParam String oauthId
    ) throws Exception {
        try {
            return ResponseEntity.ok(authenticationService.oAuthLogin(oauthId));
        } catch (Exception e) {
            throw new Exception("Invalid OAuthId supplied");
        }
    }

}
