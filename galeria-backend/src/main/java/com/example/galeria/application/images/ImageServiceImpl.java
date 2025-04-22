package com.example.galeria.application.images;

import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import com.example.galeria.domain.service.ImageService;
import com.example.galeria.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    @Transactional
    public Image save(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Optional<Image> getById(String id) {
        return imageRepository.findById(id);
    }

    @Override
    public List<Image> search(ImageExtension imageExtension, String query) {
        return imageRepository.findByExtensionAndNameOrTagsLike(imageExtension, query);
    }

    @Transactional
    @Override
    public void deleteImage(String id) {
         imageRepository.deleteById(id);
    }

}
