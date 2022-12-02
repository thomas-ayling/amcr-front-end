package com.globallogic.amcr.service;

import com.globallogic.amcr.exception.FileStorageException;
import com.globallogic.amcr.mapper.FeedbackMapper;
import com.globallogic.amcr.mapper.FileMapper;
import com.globallogic.amcr.model.Attachment;
import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
import com.globallogic.amcr.payload.FileResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.UUID;

@Service
public class FeedbackService {

    private final FeedbackMapper feedbackMapper;
    private final FileMapper fileMapper;

    public FeedbackService(FeedbackMapper feedbackMapper, FileMapper fileMapper) {
        this.feedbackMapper = feedbackMapper;
        this.fileMapper = fileMapper;
    }

    private int saveAttachment(MultipartFile incomingAttachment, UUID feedbackId) {
        String fileName = StringUtils.cleanPath(incomingAttachment.getOriginalFilename());
        String contentType = incomingAttachment.getContentType();
        try {
            if (fileName.contains("..")) {
                throw new FileStorageException("Filename contains invalid path sequence '..' " + fileName);
            }

            // Generate random UUID for the file
            UUID fileId = UUID.randomUUID();

            Attachment attachment = new Attachment(fileId, fileName, contentType, incomingAttachment.getBytes(), feedbackId);
            return fileMapper.save(attachment);
//            String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/files/download/").path(fileName).toUriString();
        } catch (
                IOException ioe) {
            try {
                throw new FileStorageException(fileName + " could not be saved.");
            } catch (FileStorageException fse) {
                throw new RuntimeException();
            }

        }

    }

    public int saveWithNoAttachment(Feedback feedback) {
        UUID feedbackId = UUID.randomUUID();
        feedback.setId(feedbackId);
        return feedbackMapper.save(feedback);
    }

    public int saveWithAttachment(Feedback feedback, MultipartFile attachment) {
        UUID feedbackId = UUID.randomUUID();
        feedback.setId(feedbackId);
        feedbackMapper.save(feedback);
        return saveAttachment(attachment, feedbackId);
    }

    public FeedbackResponse get() {
        FeedbackResponse response = feedbackMapper.get();
        return response;
    }
}
