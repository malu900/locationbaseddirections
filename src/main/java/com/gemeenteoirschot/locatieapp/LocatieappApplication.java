package com.gemeenteoirschot.locatieapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;

//he SpringBootApplication annotation tells the application that it should support auto-configuration, component scanning (of com.example.joy package and everything under it), and bean registration.
@SpringBootApplication(scanBasePackages = {"com.gemeenteoirschot.locatieapp"})
public class LocatieappApplication {
	@GetMapping(value="/", produces= MediaType.TEXT_PLAIN_VALUE)
	public String home() {

		return "home page";
	}
	public static void main(String[] args) {
		SpringApplication.run(LocatieappApplication.class, args);
	}

}
