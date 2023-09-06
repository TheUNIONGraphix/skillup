package com.spharos.pointapp.user.vo;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserGetOut {

    private String loginId;
    private String name;
    private String email;
    private String phone;
    private String address;

}
