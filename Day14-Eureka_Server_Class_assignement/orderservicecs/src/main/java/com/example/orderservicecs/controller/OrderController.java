package com.example.orderservicecs.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.orderservicecs.dto.OrderDto;
import com.example.orderservicecs.dto.PaymentDto;
import com.example.orderservicecs.dto.ProductDto;
import com.example.orderservicecs.entity.Order;
import com.example.orderservicecs.feign.PaymentClient;
import com.example.orderservicecs.feign.ProductClient;
import com.example.orderservicecs.repository.OrderRepository;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private ProductClient productClient;
    @Autowired
    private PaymentClient paymentClient;
    
    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody OrderDto request) {
        ProductDto product = productClient.getProductById(request.getProductId());
        if (product == null || product.getStock() < request.getQuantity()) {
            return ResponseEntity.badRequest().body("Product unavailable or insufficient stock.");
        }
        double total = product.getPrice() * request.getQuantity();
        Order order = new Order();
        order.setProductId(request.getProductId());
        order.setQuantity(request.getQuantity());
        order.setTotalAmount(total);
        order.setStatus("PENDING_PAYMENT");
        orderRepo.save(order);
        PaymentDto paymentReq = new PaymentDto();
        paymentReq.setAmount(total);
        paymentReq.setPaymentMethod(request.getPaymentMethod());
        PaymentDto paymentResp = paymentClient.processPayment(paymentReq);
        if ("SUCCESS".equalsIgnoreCase(paymentResp.getStatus())) {
            order.setStatus("CONFIRMED");
            productClient.reduceStock(product.getId(), request.getQuantity());
        } else {
            order.setStatus("FAILED");
        }
        orderRepo.save(order);
        return ResponseEntity.ok(order);
    }
    @GetMapping("/{orderId}")
    public ResponseEntity<?> getOrderById(@PathVariable Long orderId) {
        Optional<Order> order = orderRepo.findById(orderId);
        return order.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{orderId}")
    public ResponseEntity<?> updateOrder(
            @PathVariable Long orderId,
            @RequestBody OrderDto request) {

        Optional<Order> existingOrderOpt = orderRepo.findById(orderId);
        if (existingOrderOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Order order = existingOrderOpt.get();
        ProductDto product = productClient.getProductById(request.getProductId());
        if (product == null || product.getStock() < request.getQuantity()) {
            return ResponseEntity.badRequest().body("Product unavailable or insufficient stock for update.");
        }
        order.setProductId(request.getProductId());
        order.setQuantity(request.getQuantity());
        order.setTotalAmount(product.getPrice() * request.getQuantity());
        order.setStatus("UPDATED");
        orderRepo.save(order);
       return ResponseEntity.ok(order);
    }
    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long orderId) {
        Optional<Order> order = orderRepo.findById(orderId);
        if (order.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        orderRepo.deleteById(orderId);
        return ResponseEntity.ok("Order with ID " + orderId + " has been cancelled and deleted.");
    }
}