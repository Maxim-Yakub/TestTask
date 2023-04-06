package com.example.testtask.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.File;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String description;

    private BigDecimal prise;

    private File image;

    private Boolean popular;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Ordering order;

    public Product(String name, String description, BigDecimal prise, Boolean popular) {
        this.name = name;
        this.description = description;
        this.prise = prise;
        this.popular = popular;
    }
}
