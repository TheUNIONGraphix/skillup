package com.spharos.pointapp.config.security;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtTokenProvider;
    private final AuthenticationProvider authendicationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(CsrfConfigurer::disable)
                .authorizeHttpRequests(
                        authorizeHttpRequests -> authorizeHttpRequests
                                .requestMatchers("/api/v1/**", "/swagger-ui/**", "/swagger-resources/**", "/api-docs/**", "/api/v1/user/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(
                        sessionManagement -> sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authendicationProvider)
                .addFilterBefore(jwtTokenProvider, UsernamePasswordAuthenticationFilter.class);

//        http
//           .csrf().disable()
//           .authorizeRequests()
//           .antMatchers("/api/v1/auth/**").permitAll()
//           .anyRequest().authenticated()
//           .and()
//           .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//           .and()
//           .authenticationProvider(authendicationProvider)
//           .addFilterBefore((Filter) jwtTokenProvider, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
