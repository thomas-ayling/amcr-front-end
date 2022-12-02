package com.globallogic.amcr.payload;

public class FeedbackResponse {
    private String firstName;
    private String lastName;
    private String fileName;

    public FeedbackResponse(String firstName, String lastName, String fileName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fileName = fileName;
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

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
