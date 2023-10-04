package com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.persistance;

import com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.entity.UsersEntity;
import com.uniongraphix.spharosuser.adaptor.infrastructure.mysql.repository.UsersRepository;
import com.uniongraphix.spharosuser.application.ports.out.port.UsersPort;
import com.uniongraphix.spharosuser.domain.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UsersAdaptor implements UsersPort {

    private final UsersRepository usersRepository;

    @Override
    public Users signInUsers(Users users) {
        Optional<UsersEntity> usersEntity = usersRepository.findByEmail(users.getEmail());
        if(usersEntity.isPresent()){
            return Users.signInUsers(usersEntity.get().getEmail(), usersEntity.get().getPassword());
        }
        return null;
    }

    @Override
    public Users signUpUsers(Users users) {
        UsersEntity usersEntity = usersRepository.save(UsersEntity.signUpUsers(
                users.getEmail(),
                users.getPassword(),
                users.getName(),
                users.getPhone(),
                users.getAddress()
                ));
        return Users.formUsersEntity(usersEntity);
    }
}
