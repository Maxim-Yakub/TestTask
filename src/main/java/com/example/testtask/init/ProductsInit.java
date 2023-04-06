package com.example.testtask.init;

import com.example.testtask.models.Product;
import com.example.testtask.services.abstracts.ProductService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@RequiredArgsConstructor
public class ProductsInit {

    private final ProductService productService;

    @PostConstruct
    public void addTestProducts(){

        for (int i = 0; i < 10; i++) {
            boolean popular = (i & 1) == 0;
            productService.createProduct(new Product(
                    "Product " + i,
                    "Description of " + i,
                    BigDecimal.valueOf(1.99*(i+1)),
                    popular));
        }

    }
}
