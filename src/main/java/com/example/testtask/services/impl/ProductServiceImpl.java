package com.example.testtask.services.impl;

import com.example.testtask.models.Product;
import com.example.testtask.repositories.ProductRepository;
import com.example.testtask.services.abstracts.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public void createProduct(Product product) {

        productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {

        return productRepository.findAll();
    }

    @Override
    public List<Product> getPopularProducts() {
        return productRepository.findPopularProducts();
    }

    @Override
    public Product getProductById(Long id) {

        return productRepository.findById(id).get();
    }

    @Override
    public void deleteProductById(Long id) {

        productRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void updateProduct(Product updatedProduct) {

        createProduct(updatedProduct);
    }
}
