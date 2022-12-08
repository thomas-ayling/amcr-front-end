package com.globallogic.amcr.model;

public enum FeedbackFormType {

    CASE_STUDY("New case study proposal", String.format("<h2>%s %s has proposed a new case study:</h2><p>%s</p><strong>Email address: %s</strong>")),
    FEEDBACK("New feedback", String.format("")),
    LIBRARY("New book request", String.format("<h2>%s %s has requested a new book for the library:</h2><p>%s</p><a href='%s' >Link to book</a><strong>Email address: %s</strong>")),
    IMPROVEMENT("New improvement proposal", String.format(""));

    private final String subject;
    private final String messageBody;

    FeedbackFormType(String subject, String messageBody) {
        this.subject = subject;
        this.messageBody = messageBody;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessageBody() {
        return messageBody;
    }
}
