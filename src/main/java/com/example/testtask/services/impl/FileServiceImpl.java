package com.example.testtask.services.impl;

import com.example.testtask.models.FileEntity;
import com.example.testtask.repositories.FileRepository;
import com.example.testtask.services.abstracts.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
    private final FileRepository fileRepository;

    @Override
    public void save(MultipartFile file) throws IOException {

        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());

        fileRepository.save(fileEntity);
    }

    @Override
    public Optional<FileEntity> getFile(String id) {
        return fileRepository.findById(id);
    }

    @Override
    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }
}
