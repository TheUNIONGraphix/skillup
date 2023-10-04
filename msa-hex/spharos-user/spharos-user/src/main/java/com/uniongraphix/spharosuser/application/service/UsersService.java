package com.uniongraphix.spharosuser.application.service;

import com.uniongraphix.spharosuser.application.ports.in.UsersUseCase;
import com.uniongraphix.spharosuser.application.ports.out.dto.UsersDto;
import com.uniongraphix.spharosuser.application.ports.out.port.UsersPort;
import com.uniongraphix.spharosuser.domain.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersService implements UsersUseCase {

    private final UsersPort usersPort;

    @Override
    public UsersDto signInUsers(SignInQuery signInQuery) {
        Users users = usersPort.signInUsers(Users.signInUsers(signInQuery.getEmail(), signInQuery.getPassword()));
        return UsersDto.formUsers(users);
    }

    @Override
    public UsersDto signUpUsers(SignUpQuery signUpQuery) {
        Users users = usersPort.signUpUsers(Users.signUpUsers(
                signUpQuery.getEmail(),
                signUpQuery.getPassword(),
                signUpQuery.getName(),
                signUpQuery.getPhone(),
                signUpQuery.getAddress()
                ));
        return UsersDto.formUsers(users);
    }
}
