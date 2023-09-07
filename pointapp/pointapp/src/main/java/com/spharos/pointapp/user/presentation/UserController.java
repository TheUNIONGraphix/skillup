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
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        ModelMapper modelMapper = new ModelMapper();
        userService.createUser(modelMapper.map(userSignUpIn, UserSignUpDto.class));
    }

    @GetMapping("/user/{uuid}")
    public ResponseEntity<UserGetOut> getUserByUUID(@PathVariable(name="uuid") String UUID) {
        ModelMapper modelMapper = new ModelMapper();
        return ResponseEntity.ok(modelMapper.map(userService.getUserByUUID(UUID), UserGetOut.class));
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserGetOut>> getAllUser() {
        log.info("getAllUser() is called");
        ModelMapper modelMapper = new ModelMapper();
        return ResponseEntity.ok(modelMapper.map(userService.getAllUsers(), List.class));
    }

}
