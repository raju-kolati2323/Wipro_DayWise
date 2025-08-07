package com.example.orderservicecs.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.orderservicecs.dto.ProductDto;

@FeignClient(name = "productservicecs")
public interface ProductClient {
    @GetMapping("/products/{id}")
    ProductDto getProductById(@PathVariable Long id);

    @PutMapping("/products/{id}")
    ResponseEntity<String> reduceStock(@PathVariable Long id, @RequestBody int quantity);
}
