package com.microservice.Main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@RestController
public class MainApplication {

	@GetMapping("/Hello")
	public String getMessage() {
		return "Good morning with everyone, my name is Edgar";
	}

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

}