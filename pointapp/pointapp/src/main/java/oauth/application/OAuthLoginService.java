package oauth.application;

import java.util.List;

public interface OAuthLoginService {

//    void addOAuthLogin(OAuthLoginAddDto oAuthLoginAddDto);
    boolean isOAuthLoginExist(String oAuthId);
    List<String> getAllTypeByUserId(Long userId);

}
