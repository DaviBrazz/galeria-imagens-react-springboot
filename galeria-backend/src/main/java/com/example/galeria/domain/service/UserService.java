package com.example.galeria.domain.service;

import com.example.galeria.domain.AccessToken;
import com.example.galeria.domain.entity.User;

public interface UserService {
    User getByEmail(String email);

    User save(User user);

    AccessToken autheticate(String email, String password);

}
