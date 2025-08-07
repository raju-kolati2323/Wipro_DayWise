package com.example.productservicecs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.productservicecs.entity.Product;
import com.example.productservicecs.repository.ProductRepository;


@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepo;
	
	@PostMapping
	public Product addProduct(@RequestBody Product product) {
		return productRepo.save(product);
	}
	
	@GetMapping
	public List<Product> getAllProducts(){
		return productRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Product getProductById(Long id) {
	    return productRepo.findById(id)
	                      .orElseThrow(() -> new RuntimeException("No product found with the id: " + id));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> decreaseStock(@PathVariable Long id, @RequestBody int quantity) {
	    Product product = productRepo.findById(id).orElse(null);
	    if (product == null) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No product found with the given id.");
	    }
	    if (product.getStock() < quantity) {
	        return ResponseEntity.badRequest().body("Insufficient stock.");
	    }

	    product.setStock(product.getStock() - quantity);
	    productRepo.save(product);
	    return ResponseEntity.ok("Stock decreased.");
	}

}
