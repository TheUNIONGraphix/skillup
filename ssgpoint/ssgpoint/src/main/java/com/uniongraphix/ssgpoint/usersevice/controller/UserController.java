package com.uniongraphix.ssgpoint.usersevice.controller;

import com.uniongraphix.ssgpoint.usersevice.entity.User;
import com.uniongraphix.ssgpoint.usersevice.service.IUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {
    private final IUserService userService;

    @PostMapping("/user")
    public String createUser(@RequestBody User user) {
        log.info("createUser: {}", user);
        return userService.createUser(user);
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}
