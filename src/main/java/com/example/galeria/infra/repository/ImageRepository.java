package com.example.galeria.infra.repository;

import com.example.galeria.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}
