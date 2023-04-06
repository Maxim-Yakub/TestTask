package com.example.testtask.services.abstracts;

import com.example.testtask.models.Product;

import java.util.List;

public interface ProductService {

    void createProduct(Product product);

    List<Product> getAllProducts();

    List<Product> getPopularProducts();

    Product getProductById(Long id);

    void deleteProductById(Long id);

    void updateProduct(Product updatedProduct);

}
