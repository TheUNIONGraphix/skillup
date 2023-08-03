package com.uniongraphix.ssgpoint.usersevice.repository;

import com.uniongraphix.ssgpoint.usersevice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUserRepository extends JpaRepository<User, Long> {
}
