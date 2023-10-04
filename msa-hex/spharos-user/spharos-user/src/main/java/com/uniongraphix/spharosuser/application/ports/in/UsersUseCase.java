package com.uniongraphix.spharosuser.application.ports.in;

import com.uniongraphix.spharosuser.adaptor.web.request.RequestSignUpUsers;
import com.uniongraphix.spharosuser.adaptor.web.request.RequestUsers;
import com.uniongraphix.spharosuser.application.ports.out.dto.UsersDto;
import lombok.Builder;
import lombok.Getter;

public interface UsersUseCase {

    UsersDto signInUsers(SignInQuery signInQuery);
    UsersDto signUpUsers(SignUpQuery signUpQuery);

    @Getter
    @Builder
    class SignInQuery {

        private String email;
        private String password;

        public static SignInQuery toQuery(RequestUsers requestUsers) {
            return SignInQuery.builder()
                    .email(requestUsers.getEmail())
                    .password(requestUsers.getPassword())
                    .build();
        }
    }

    @Getter
    @Builder
    class SignUpQuery {

        private String email;
        private String password;
        private String name;
        private String phone;
        private String address;

        public static SignUpQuery toQuery(RequestSignUpUsers requestSignUpUsers) {
            return SignUpQuery.builder()
                    .email(requestSignUpUsers.getEmail())
                    .password(requestSignUpUsers.getPassword())
                    .name(requestSignUpUsers.getName())
                    .phone(requestSignUpUsers.getPhone())
                    .address(requestSignUpUsers.getAddress())
                    .build();

        }

    }

}
