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

@Service
public class FeedbackService {

    private final FeedbackMapper feedbackMapper;
    private final FileMapper fileMapper;

    public FeedbackService(FeedbackMapper feedbackMapper, FileMapper fileMapper) {
        this.feedbackMapper = feedbackMapper;
        this.fileMapper = fileMapper;
    }

    private int saveAttachment(MultipartFile incomingAttachment, long feedbackId) {
        String fileName = StringUtils.cleanPath(incomingAttachment.getOriginalFilename());
        String contentType = incomingAttachment.getContentType();
        try {
            if (fileName.contains("..")) {
                throw new FileStorageException("Filename contains invalid path sequence '..' " + fileName);
            }

            Attachment attachment = new Attachment(fileName, contentType, incomingAttachment.getBytes());
            return fileMapper.save(attachment, feedbackId);
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

    public long saveWithNoAttachment(Feedback feedback) {
        long id = feedbackMapper.save(feedback);
        System.out.println(id);
        return id;
    }

    public long saveWithAttachment(Feedback feedback, MultipartFile attachment) {
        long feedbackId = feedbackMapper.save(feedback);
        System.out.println(feedbackId);
        return saveAttachment(attachment, feedbackId);
    }
}
