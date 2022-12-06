package com.globallogic.amcr.model;

public class Email {
    private String sender;
    private String recipient;
    private String subject;
    private String messageBody;
    private String attachment;

    public Email(String sender, String subject, String messageBody, String attachment) {
        this.sender = sender;
        this.recipient = "engineeringcenterbot@globallogic.com";
        this.subject = subject;
        this.messageBody = messageBody;
        this.attachment = attachment;
    }

    public Email(String sender, String subject, String messageBody) {
        this.sender = sender;
        this.recipient = "engineeringcenterbot@globallogic.com";
        this.subject = subject;
        this.messageBody = messageBody;
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

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }
}
