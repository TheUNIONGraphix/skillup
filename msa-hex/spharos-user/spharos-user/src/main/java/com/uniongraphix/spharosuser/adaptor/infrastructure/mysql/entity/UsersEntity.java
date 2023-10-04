package com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UsersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String name;
    private String phone;
    private String address;

    public static UsersEntity signInUsers(String email, String password) {
        return UsersEntity.builder()
            .email(email)
            .password(password)
            .build();
    }

    public static UsersEntity signUpUsers(String email, String password, String name, String phone, String address) {
        return UsersEntity.builder()
            .email(email)
            .password(password)
            .name(name)
            .phone(phone)
            .address(address)
            .build();
    }
}
