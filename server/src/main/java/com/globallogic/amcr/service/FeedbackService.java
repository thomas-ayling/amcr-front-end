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

    public FeedbackMapper feedbackMapper;
    private FileMapper fileMapper;

    public FeedbackService(FeedbackMapper feedbackMapper, FileMapper fileMapper) {
        this.feedbackMapper = feedbackMapper;
        this.fileMapper = fileMapper;
    }

    private FileResponse saveAttachment(MultipartFile incomingAttachment) {
        String fileName = StringUtils.cleanPath(incomingAttachment.getOriginalFilename());
        String contentType = incomingAttachment.getContentType();
        try {
            if (fileName.contains("..")) {
                throw new FileStorageException("Filename contains invalid path sequence '..' " + fileName);
            }

            Attachment attachment = new Attachment(fileName, contentType, incomingAttachment.getBytes());
            fileMapper.save(attachment);
            String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/files/download/").path(fileName).toUriString();
            return new FileResponse(fileName, downloadUri, incomingAttachment.getSize());
        } catch (
                IOException ioe) {
            try {
                throw new FileStorageException(fileName + " could not be saved.");
            } catch (FileStorageException fse) {
                throw new RuntimeException();
            }

        }

    }

    public FeedbackResponse saveWithNoAttachment(Feedback feedback) {
        long id = feedbackMapper.save(feedback);
        System.out.println(id);

        return new FeedbackResponse();
    }

    public FeedbackResponse saveWithAttachment(Feedback feedback, MultipartFile attachment) {
        long id = feedbackMapper.save(feedback);
        System.out.println(id);
        FileResponse fileResponse = saveAttachment(attachment);


        return new FeedbackResponse(fileResponse);

    }
}
