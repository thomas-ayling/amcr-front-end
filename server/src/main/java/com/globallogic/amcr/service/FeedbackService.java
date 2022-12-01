package com.globallogic.amcr.service;

import com.globallogic.amcr.exception.FileStorageException;
import com.globallogic.amcr.model.Feedback;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FeedbackService {
//    public void saveWithNoAttachment(Feedback feedback) {
//
//    }
//
//    public void saveWithAttachment(Feedback feedback, MultipartFile attachment) {
//        String fileName = StringUtils.cleanPath(attachment.getOriginalFilename());
//        String contentType = attachment.getContentType();
//        try {
//            if (fileName.contains("..")) {
//                throw new FileStorageException("Filename contains invalid path sequence '..' " + fileName);
//            }
//
//        }catch(Exception e) {
//
//        }
//    }
}
