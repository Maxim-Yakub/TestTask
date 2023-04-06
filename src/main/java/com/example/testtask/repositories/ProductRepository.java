package com.example.testtask.repositories;

import com.example.testtask.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT product FROM Product product where product.popular = true ")
    List<Product> findPopularProducts();

}
