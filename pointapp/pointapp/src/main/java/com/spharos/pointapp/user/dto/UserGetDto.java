package com.spharos.pointapp.user.dto;

import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserGetDto {

    private String loginId;
    private String name;
    private String email;
    private String phone;
    private String address;

}
