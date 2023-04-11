package com.example.testtask.repositories;

import com.example.testtask.models.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, String> {
}
