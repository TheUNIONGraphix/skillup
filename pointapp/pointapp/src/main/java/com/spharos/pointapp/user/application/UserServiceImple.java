package com.spharos.pointapp.user.application;

import com.spharos.pointapp.user.domain.User;
import com.spharos.pointapp.user.dto.UserGetDto;
import com.spharos.pointapp.user.dto.UserSignUpDto;
import com.spharos.pointapp.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImple implements UserService{

    private final UserRepository userRepository;

    @Override
    public void createUser(UserSignUpDto userSignUpDto) {
        User user = User.builder()
                .loginId(userSignUpDto.getLoginId())
                .userName(userSignUpDto.getName())
                .password(userSignUpDto.getPassword())
                .email(userSignUpDto.getEmail())
                .phone(userSignUpDto.getPhone())
                .address(userSignUpDto.getAddress())
                .build();
        userRepository.save(user);
    }

    @Override
    public UserGetDto getUserByLoginId(String loginId) {
        return null;
    }

    @Override
    public List<UserGetDto> getAllUsers() {
        return null;
    }
}
