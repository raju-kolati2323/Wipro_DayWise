package com.example.orderservicecs.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	    private Long id;
	    private Long productId;
	    private int quantity;
	    private double totalAmount;
	    private String status;
	    
		public Order() {}

		public Order(Long id, Long productId, int quantity, double totalAmount, String status) {
			this.id = id;
			this.productId = productId;
			this.quantity = quantity;
			this.totalAmount = totalAmount;
			this.status = status;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Long getProductId() {
			return productId;
		}

		public void setProductId(Long productId) {
			this.productId = productId;
		}

		public int getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		public double getTotalAmount() {
			return totalAmount;
		}

		public void setTotalAmount(double totalAmount) {
			this.totalAmount = totalAmount;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}
}
