package com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.repository;

import com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<UsersEntity, Long> {

    Optional<UsersEntity> findByEmail(String email);

}
