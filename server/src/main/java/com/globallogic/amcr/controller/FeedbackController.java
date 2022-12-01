package com.globallogic.amcr.controller;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.service.FeedbackService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    private FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void uploadFeedback(
            @RequestPart("feedback") Feedback feedback,
            @RequestPart(value = "attachment", required = false) MultipartFile attachment
    ) {

        System.out.println(feedback.getFirstName());
        System.out.println(attachment.getContentType());

//        if (attachment == null) {
//            return feedbackService.saveWithNoAttachment(feedback);
//        }
//        return feedbackService.saveWithAttachment(feedback, attachment);
    }
}
