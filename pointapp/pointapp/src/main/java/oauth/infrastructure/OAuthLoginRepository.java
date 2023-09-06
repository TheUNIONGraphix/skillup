package oauth.infrastructure;

import oauth.domain.OAuthLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface OAuthLoginRepository extends JpaRepository<OAuthLogin, Integer> {

    @Query(
            name = "OAuthLogin.findByOauthId",
            value = "SELECT * FROM OAUTHLOGIN WHERE oauth_id = :oauthId",
            nativeQuery = true)
    Optional<OAuthLogin> findByOauthId(@Param("oauthId") String oauthId);
}
