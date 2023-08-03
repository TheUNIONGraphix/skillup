package com.uniongraphix.ssgpoint.usersevice.service;

import com.uniongraphix.ssgpoint.usersevice.entity.User;

import java.util.List;

public interface IUserService {
    String createUser(User user);
    User getUser(Long id);
    List<User> getAllUsers();
}
