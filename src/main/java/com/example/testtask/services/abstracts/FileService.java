package com.example.testtask.services.abstracts;

import com.example.testtask.models.FileEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface FileService {

    void save(MultipartFile file) throws IOException;

    Optional<FileEntity> getFile (String id);

    List<FileEntity> getAllFiles();
}
