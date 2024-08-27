package com.example.galeria.application.images;

import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import com.example.galeria.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/images")
@Slf4j
@RequiredArgsConstructor
public class ImageController {

   private final ImageService imageService;

    @PostMapping
    public ResponseEntity save(
            @RequestParam("file")MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam ("tags")List<String> tags) throws IOException {

        log.info("------ IMAGEM RECEBIDA ------ ");
        log.info("name: {}, size: {}", file.getOriginalFilename(), file.getSize());




        Image image = Image.builder().name(name)
                .tags(String.join(",", tags))
                .size(file.getSize())
                .extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType())))
                .file(file.getBytes())
                .build();

        imageService.save(image);

        return ResponseEntity.ok().build();
    }
}
