package com.globallogic.amcr.model;

public class Attachment {
    String fileName;
    String contentType;
    byte[] data;

    public Attachment(String fileName, String contentType, byte[] data) {
        this.fileName = fileName;
        this.contentType = contentType;
        this.data = data;
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

    public void setBytes(byte[] data) {
        this.data = data;
    }
}
