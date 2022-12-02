package com.globallogic.amcr.model;

import com.globallogic.amcr.typehandlers.UUIDTypeHandler;

import java.util.UUID;

public class Attachment {
    UUID id;
    String fileName;
    String contentType;
    byte[] data;
    UUID feedbackId;

    public Attachment(UUID id, String fileName, String contentType, byte[] data, UUID feedbackId) {
        this.id = id;
        this.fileName = fileName;
        this.contentType = contentType;
        this.data = data;
        this.feedbackId = feedbackId;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public UUID getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(UUID feedbackId) {
        this.feedbackId = feedbackId;
    }
}
