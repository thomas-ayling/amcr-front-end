package com.globallogic.amcr.controller;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
import com.globallogic.amcr.service.FeedbackService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public long uploadFeedback(
            @RequestPart("feedback") Feedback feedback,
            @RequestPart(value = "attachment", required = false) MultipartFile attachment
    ) {
        if (attachment == null) {
            return feedbackService.saveWithNoAttachment(feedback);
        }
        else return feedbackService.saveWithAttachment(feedback, attachment);
    }
}
