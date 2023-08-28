package com.spharos.pointapp.user.application;

import com.spharos.pointapp.user.domain.Roll;
import com.spharos.pointapp.user.domain.User;
import com.spharos.pointapp.user.dto.UserGetDto;
import com.spharos.pointapp.user.dto.UserSignUpDto;
import com.spharos.pointapp.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImple implements UserService{

    private final UserRepository userRepository;

    @Override
    public void createUser(UserSignUpDto userSignUpDto) {

        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString();

        User user = User.builder()
                .loginId(userSignUpDto.getLoginId())
                .UUID(uuidString)
                .name(userSignUpDto.getName())
                .password(userSignUpDto.getPassword())
                .email(userSignUpDto.getEmail())
                .phone(userSignUpDto.getPhone())
                .address(userSignUpDto.getAddress())
                .status(1)
                .roll(Roll.USER)
                .build();
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public UserGetDto getUserByLoginId(String loginId) {

        User user = userRepository.findByLoginId(loginId).get();
        log.info("user is : {}" , user);
        UserGetDto userGetDto = UserGetDto.builder()
                .loginId(user.getLoginId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .address(user.getAddress())
                .build();
        return userGetDto;
    }

    @Override
    @Transactional(readOnly = true)
    public UserGetDto getUserByUUID(String UUID) {
        try {
            User user = userRepository.findByUUID(UUID).orElseThrow(
                    () -> new IllegalArgumentException("해당 유저가 없습니다.")
            );
            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(user, UserGetDto.class);
        } catch (Exception e) {
            log.info("error is : {}" , e);
        }
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserGetDto> getAllUsers() {
        ModelMapper modelMapper = new ModelMapper();
        List<User> users = userRepository.findAll();
        List<UserGetDto> userGetDtos = users.stream().map(
                user -> modelMapper.map(user, UserGetDto.class)
        ).toList();
//        List<UserGetDto> userGetDtos = modelMapper.map(users, List.class).stream().toList();
        log.info("userGetDtos is : {}" , userGetDtos);
        return userGetDtos;
    }
}
