package com.example.paymentservicecs.entity;

import jakarta.persistence.*;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	
    private Long orderId;
    private double amount;
    private String paymentMethod;
    private String status;
    
	public Payment() {}

	public Payment(Long id, Long orderId, double amount, String paymentMethod, String status) {
		this.id = id;
		this.orderId = orderId;
		this.amount = amount;
		this.paymentMethod = paymentMethod;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}    
}
