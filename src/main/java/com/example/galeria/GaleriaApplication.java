package com.example.galeria;


import com.example.galeria.domain.entity.Image;
import com.example.galeria.domain.enums.ImageExtension;
import com.example.galeria.infra.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GaleriaApplication {

	@Bean
	public CommandLineRunner commandLineRunner(@Autowired ImageRepository imageRepository) {
		return args -> {
       Image image = Image
			   .builder()
			   .extension(ImageExtension.PNG)
			   .name("myimage")
			   .tags("teste")
			   .size(1000L)
			   .build();
        imageRepository.save(image);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(GaleriaApplication.class, args);
	}

}
