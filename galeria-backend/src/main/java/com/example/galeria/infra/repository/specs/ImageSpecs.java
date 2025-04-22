package com.example.galeria.infra.repository.specs;

import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;

public class ImageSpecs {

    private ImageSpecs() {

    }

    public static Specification<Image> extensionEqual(ImageExtension imageExtension){
        return (root, q, cb) -> cb.equal(root.get("extension"), imageExtension);
    }

    public static Specification<Image> nameLike(String name) {
        return (root, q, cb) -> cb.like(cb.upper(root.get("name")),"%" + name.toUpperCase() + "%");
    }

    public static Specification<Image> tagsLike (String tags) {
        return (root, q, cb) -> cb.like(cb.upper(root.get("name")),"%" + tags.toUpperCase() + "%");
    }

}
