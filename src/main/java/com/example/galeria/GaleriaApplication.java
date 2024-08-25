package com.example.galeria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GaleriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(GaleriaApplication.class, args);
	}

}
