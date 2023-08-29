package com.spharos.pointapp.auth;

import com.spharos.pointapp.auth.vo.AuthenticationRequest;
import com.spharos.pointapp.auth.vo.AuthenticationResponse;
import com.spharos.pointapp.config.security.JwtTokenProvider;
import com.spharos.pointapp.user.domain.User;
import com.spharos.pointapp.user.dto.UserSignUpDto;
import com.spharos.pointapp.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuthenticationService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    @Transactional(readOnly = false)
    public AuthenticationResponse signup(UserSignUpDto userSignUpDto) {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();

        log.info("userSignUpDto is : {}" , userSignUpDto);

        User user = User.builder()
                .loginId(userSignUpDto.getLoginId())
                .UUID(uuidString)
                .name(userSignUpDto.getName())
                .password(userSignUpDto.getPassword())
                .email(userSignUpDto.getEmail())
                .phone(userSignUpDto.getPhone())
                .address(userSignUpDto.getAddress())
                .status(1)
                .build();
        user.hashPassword(user.getPassword());
        userRepository.save(user);

        String JwtToken = jwtTokenProvider.generateToken(user);
        log.info("JwtToken is : {}" , JwtToken);
        return AuthenticationResponse.builder()
                .token(JwtToken)
                .build();
    }

    @Transactional(readOnly = false)
    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) throws Exception {


            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getLoginId(),
                            authenticationRequest.getPassword()
                    )
            );
            User user = userRepository.findByLoginId(authenticationRequest.getLoginId()).orElseThrow();
            String JwtToken = jwtTokenProvider.generateToken(user);
            return AuthenticationResponse.builder()
                    .uuid(user.getUUID())
                    .name(user.getName())
                    .token(JwtToken)
                    .build();


    }
}
