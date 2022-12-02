package com.globallogic.amcr.exception;

public class FileNotFoundException extends Throwable {
    private static final long serialVersionUID = 1L;

    public FileNotFoundException(String message) {
        super(message);
    }

    public FileNotFoundException(String message, Throwable error) {
        super(message, error);
    }
}
