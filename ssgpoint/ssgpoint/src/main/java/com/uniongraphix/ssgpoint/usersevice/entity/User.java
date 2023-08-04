package com.uniongraphix.ssgpoint.usersevice.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false, length = 100, name = "user_id")
    private String userId;
    @Column(nullable = false, length = 30, name = "user_name")
    private String userName;
    @Column(nullable = false, length = 100, name = "email")
    private String email;
    @Column(nullable = false, length = 100, name = "password")
    private String password;
    private String phone;
    private String address;
    @Column(nullable = false, length = 1, name = "status", columnDefinition = "int default 1")
    private Integer status;

}
