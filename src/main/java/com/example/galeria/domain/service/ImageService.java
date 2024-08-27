package com.example.galeria.domain.service;

import com.example.galeria.domain.entity.Image;

import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);



}
