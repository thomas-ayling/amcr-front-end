package com.globallogic.amcr.controller;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
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
        return feedbackService.saveWithAttachment(feedback, attachment);
    }

    @GetMapping("/get-many")
    public List<FeedbackResponse> getManyFeedback() {
        return feedbackService.getMany();
    }

    @GetMapping("/file-download/{id}")
    public ResponseEntity<Resource> getFile(@PathVariable UUID id) {
        return feedbackService.getFile(id);
    }

}
