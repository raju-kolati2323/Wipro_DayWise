package com.example.paymentservicecs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.paymentservicecs.dto.PaymentDto;
import com.example.paymentservicecs.entity.Payment;
import com.example.paymentservicecs.repository.PaymentRepository;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping
    public PaymentDto processPayment(@RequestBody PaymentDto request) {
        Payment payment = new Payment();
        payment.setOrderId(request.getOrderId());
        payment.setAmount(request.getAmount());
        payment.setPaymentMethod(request.getPaymentMethod());

        String status = request.getAmount() > 0 ? "SUCCESS" : "FAILED";
        payment.setStatus(status);

        paymentRepository.save(payment);

        PaymentDto response = new PaymentDto();
        response.setStatus(status);
        return response;
    }
}
