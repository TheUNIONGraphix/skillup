package com.uniongraphix.ssgpoint.usersevice.service;

import com.uniongraphix.ssgpoint.usersevice.entity.User;
import com.uniongraphix.ssgpoint.usersevice.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImple implements IUserService{

    private final IUserRepository userRepository;

    @Override
    public String createUser(User user) {
        userRepository.save(user);
        return "created user";
    }

    @Override
    public User getUser(Long id) {
        User user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
