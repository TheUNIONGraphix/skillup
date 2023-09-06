package oauth.domain;

import com.spharos.pointapp.user.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class OAuthLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String oauthName;
    @Column(name = "oauth_id")
    private String oauthId;
    private String oauthType;
    @Column(nullable = true)
    private String uuid;

//    not user is

}
