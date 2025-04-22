package com.example.galeria.domain.service;

import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);

    List<Image> search(ImageExtension imageExtension, String query);


    @Transactional
    void deleteImage(String id);
}
