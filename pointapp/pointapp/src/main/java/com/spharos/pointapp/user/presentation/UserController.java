package com.spharos.pointapp.user.presentation;

import com.spharos.pointapp.user.application.UserService;
import com.spharos.pointapp.user.dto.UserGetDto;
import com.spharos.pointapp.user.dto.UserSignUpDto;
import com.spharos.pointapp.user.vo.UserGetOut;
import com.spharos.pointapp.user.vo.UserSignUpIn;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Operation(summary = "회원 추가 요청", description = "회원을 등록합니다.", tags = { "User Controller" })
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK",
                    content = @Content(schema = @Schema(implementation = UserGetOut.class))),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    })
    @PostMapping("/user")
    public void createUser(@RequestBody UserSignUpIn userSignUpIn) {
        log.info("INPUT Object Data is : {}" , userSignUpIn);
        UserSignUpDto userSignUpDto = UserSignUpDto.builder()
                .loginId(userSignUpIn.getLoginId())
                .password(userSignUpIn.getPassword())
                .name(userSignUpIn.getName())
                .email(userSignUpIn.getEmail())
                .phone(userSignUpIn.getPhone())
                .address(userSignUpIn.getAddress())
                .build();
        userService.createUser(userSignUpDto);
    }

    @GetMapping("/user/{UUID}")
    public ResponseEntity<UserGetOut> getUserByUUID(@PathVariable String UUID) {
        log.info("INPUT UUID is : {}" , UUID);
        UserGetDto userGetDto = userService.getUserByUUID(UUID);
        log.info("OUTPUT userGetDto is : {}" , userGetDto);
        UserGetOut userGetOut = UserGetOut.builder()
                .loginId(userGetDto.getLoginId())
                .name(userGetDto.getName())
                .email(userGetDto.getEmail())
                .phone(userGetDto.getPhone())
                .address(userGetDto.getAddress())
                .build();
        log.info("OUTPUT userGetOut is : {}" , userGetOut);
        return ResponseEntity.ok(userGetOut);
    }

}
