package com.example.orderservicecs.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.orderservicecs.dto.PaymentDto;

@FeignClient(name = "paymentservicecs")
public interface PaymentClient {
    @PostMapping("/payments")
    PaymentDto processPayment(@RequestBody PaymentDto paymentRequest);
}