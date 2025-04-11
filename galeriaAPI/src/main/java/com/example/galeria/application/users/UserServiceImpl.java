package com.example.galeria.application.users;

import com.example.galeria.domain.AccessToken;
import com.example.galeria.domain.entity.User;
import com.example.galeria.domain.exception.DuplicatedTupleException;
import com.example.galeria.domain.service.UserService;
import com.example.galeria.infra.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        var possibleUser = getByEmail(user.getEmail());
        if (possibleUser != null) {
            throw new DuplicatedTupleException("Usuário já existe!");
        }
        return userRepository.save(user);
    }

    @Override
    public AccessToken autheticate(String email, String password) {
        return null;
    }
}
