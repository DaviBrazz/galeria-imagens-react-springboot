package com.example.galeria.infra.repository;

import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import com.example.galeria.infra.repository.specs.GenericSpecs;
import com.example.galeria.infra.repository.specs.ImageSpecs;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import javax.swing.text.html.HTMLDocument;
import java.util.List;

import static com.example.galeria.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension imageExtension, String query) {

        Specification<Image> spec = where(GenericSpecs.conjunction());

        if (imageExtension != null) {
        spec = spec.and(extensionEqual(imageExtension));
        }

        if (StringUtils.hasText(query)){

           spec = spec.and(anyOf(nameLike(query), tagsLike(query)));
        }
        return findAll(spec);
    }
}
