package com.example.galeria.application.jwt;

import com.example.galeria.domain.AccessToken;
import com.example.galeria.domain.entity.User;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    public AccessToken generateToken(User user) {
        return new AccessToken("");
    }
}
