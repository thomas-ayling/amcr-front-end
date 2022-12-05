package com.globallogic.amcr.model;

import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public class Feedback {
    private UUID id;
    private String feedbackType;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String feedbackBody;
    private String bookName;
    private String bookLink;

    public Feedback(String feedbackType, String firstName, String lastName, String emailAddress, String feedbackBody, String bookName, String bookLink) {
        this.feedbackType = feedbackType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.feedbackBody = feedbackBody;
        this.bookName = bookName;
        this.bookLink = bookLink;
    }

    public Feedback() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFeedbackType() {
        return feedbackType;
    }

    public void setFeedbackType(String feedbackType) {
        this.feedbackType = feedbackType;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getFeedbackBody() {
        return feedbackBody;
    }

    public void setFeedbackBody(String feedbackBody) {
        this.feedbackBody = feedbackBody;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookLink() {
        return bookLink;
    }

    public void setBookLink(String bookLink) {
        this.bookLink = bookLink;
    }
}
