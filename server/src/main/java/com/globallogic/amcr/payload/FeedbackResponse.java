package com.globallogic.amcr.payload;

import com.globallogic.amcr.model.Attachment;

public class FeedbackResponse {
    private Integer feedbackOrder;
    private String feedbackType;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String feedbackBody;
    private String bookName;
    private String bookLink;
    private String downloadUri;

    //TODO: Will need file name in response

    public FeedbackResponse(Integer feedbackOrder, String feedbackType, String firstName, String lastName, String emailAddress, String feedbackBody, String bookName, String bookLink, String downloadUri) {
        this.feedbackOrder = feedbackOrder;
        this.feedbackType = feedbackType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.feedbackBody = feedbackBody;
        this.bookName = bookName;
        this.bookLink = bookLink;
        this.downloadUri = downloadUri;
    }

    public Integer getFeedbackOrder() {
        return feedbackOrder;
    }

    public void setFeedbackOrder(Integer feedbackOrder) {
        this.feedbackOrder = feedbackOrder;
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

    public String getDownloadUri() {
        return downloadUri;
    }

    public void setDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
    }
}
