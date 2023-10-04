package com.uniongraphix.spharosuser.application.ports.out.port;

import com.uniongraphix.spharosuser.domain.Users;

public interface UsersPort {

    Users signInUsers(Users users);
    Users signUpUsers(Users users);

}
