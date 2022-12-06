package com.globallogic.amcr.controller;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
import com.globallogic.amcr.service.EmailService;
import com.globallogic.amcr.service.FeedbackService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    private final EmailService emailService;
    private final FeedbackService feedbackService;

    public FeedbackController(EmailService emailService, FeedbackService feedbackService) {
        this.emailService = emailService;
        this.feedbackService = feedbackService;
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public long uploadFeedback(
            @RequestPart("feedback") Feedback feedback,
            @RequestPart(value = "attachment", required = false) MultipartFile attachment
    ) {
        emailService.sendMail(feedback, attachment);
        if (attachment == null) {
            return feedbackService.saveWithNoAttachment(feedback);
        }
        return feedbackService.saveWithAttachment(feedback, attachment);
    }

    @GetMapping("/get-many")
    public List<FeedbackResponse> getManyFeedback() {
        return feedbackService.getAll();
    }

    @GetMapping("/get-latest")
    public List<FeedbackResponse> getLatestFeedback() {
        return feedbackService.getLatest();
    }

    @GetMapping("/get-older/{last}")
    public List<FeedbackResponse> getLatestFeedback(@PathVariable Integer last) {
        return feedbackService.getOlder(last);
    }

    @GetMapping("/file-download/{id}")
    public ResponseEntity<Resource> getFile(@PathVariable UUID id) {
        return feedbackService.getFile(id);
    }

}
