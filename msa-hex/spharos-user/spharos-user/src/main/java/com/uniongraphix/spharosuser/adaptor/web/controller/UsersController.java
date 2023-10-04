package com.uniongraphix.spharosuser.adaptor.web.controller;

import com.uniongraphix.spharosuser.adaptor.web.request.RequestSignUpUsers;
import com.uniongraphix.spharosuser.adaptor.web.request.RequestUsers;
import com.uniongraphix.spharosuser.application.ports.in.UsersUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping("/api/v1/users")
public class UsersController {

    private final UsersUseCase usersUseCase;

    @PostMapping("/register")
    public void signUp(@RequestBody RequestSignUpUsers requestSignUpUsers) {
        log.info("requestSignUpUsers: {}", requestSignUpUsers);
        usersUseCase.signUpUsers(UsersUseCase.SignUpQuery.toQuery(requestSignUpUsers));
    }

    @PostMapping("/signin")
    public void signIn(@RequestBody RequestUsers requestUsers) {
        usersUseCase.signInUsers(UsersUseCase.SignInQuery.toQuery(requestUsers));
    }


}
