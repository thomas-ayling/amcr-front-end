package com.globallogic.amcr.model;

import org.springframework.web.multipart.MultipartFile;

public class Email {
    private String sender;
    private String recipient;
    private String subject;
    private String messageBody;
    private MultipartFile attachment;

    public Email(String sender, String recipient, String subject, String messageBody, MultipartFile attachment) {
        this.sender = sender;
        this.recipient = recipient;
        this.subject = subject;
        this.messageBody = messageBody;
        this.attachment = attachment;
    }

    public Email() {
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessageBody() {
        return messageBody;
    }

    public void setMessageBody(String messageBody) {
        this.messageBody = messageBody;
    }

    public MultipartFile getAttachment() {
        return attachment;
    }

    public void setAttachment(MultipartFile attachment) {
        this.attachment = attachment;
    }
}
