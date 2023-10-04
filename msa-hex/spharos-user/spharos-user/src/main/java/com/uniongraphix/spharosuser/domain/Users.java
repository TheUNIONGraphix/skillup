package com.uniongraphix.spharosuser.domain;

import com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class Users {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String address;

    public static Users signInUsers(String email, String password) {
        return Users.builder()
            .email(email)
            .password(password)
            .build();
    }

    public static Users signUpUsers(String email, String password, String name, String phone, String address) {
        return Users.builder()
            .email(email)
            .password(password)
            .name(name)
            .phone(phone)
            .address(address)
            .build();
    }

    public static Users formUsersEntity(UsersEntity usersEntity) {
        return Users.builder()
            .id(usersEntity.getId())
            .email(usersEntity.getEmail())
            .password(usersEntity.getPassword())
            .name(usersEntity.getName())
            .phone(usersEntity.getPhone())
            .address(usersEntity.getAddress())
            .build();
    }

}
