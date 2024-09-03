package com.ohgiraffers.springcrud.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ConfigFilter implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOriginPatterns("http://localhost:5173")
                .allowedMethods("GET", "POST", "DELETE", "OPTIONS", "PUT")
                .allowedHeaders("*")
                .exposedHeaders("Custom-Header")
                .allowCredentials(true);
    }

}
