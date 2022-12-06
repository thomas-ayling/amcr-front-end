package com.globallogic.amcr.service;

import com.globallogic.amcr.model.Email;
import com.globallogic.amcr.model.Feedback;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;

@Service
public class EmailService {
    private JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public boolean sendMail(Feedback feedback, MultipartFile attachment) {
        try {
            Email email = createEmailFromFeedback(feedback, attachment);

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setTo(email.getRecipient());
            mimeMessageHelper.setFrom(email.getSender());
            mimeMessageHelper.setSubject(email.getSubject());
            mimeMessageHelper.setText(email.getMessageBody(), true);
            if (attachment != null) mimeMessageHelper.addAttachment(StringUtils.cleanPath(Objects.requireNonNull(attachment.getOriginalFilename())), email.getAttachment());

            mailSender.send(mimeMessage);

            return true;
        } catch (Exception e) {
            throw new MailSendException("There was a problem sending this email", e);
//            return "There was a problem sending this email";
        }
    }

    private Email createEmailFromFeedback(Feedback feedback, MultipartFile attachment) {
        Email email = new Email();
        Boolean isAnonymous = feedback.getEmailAddress() == null;
        email.setSender(isAnonymous ? "anonymous" : feedback.getEmailAddress());
        email.setRecipient("engineeringcenterbot@globallogic.com");
        if (attachment != null) email.setAttachment(attachment);

        switch (feedback.getFeedbackType()) {
            case "case-study":
                email.setSubject("New case study proposal");
                email.setMessageBody(String.format("<h2>%s %s has proposed a new case study:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress()));
                return email;

            case "feedback":
                email.setSubject("New feedback");
                email.setMessageBody(isAnonymous
                        ? String.format("<h2>Anonymous feedback has been submitted:</h2><p>%s</p>", feedback.getFeedbackBody())
                        : String.format("<h2>%s %s has left some feedback:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress()));
                return email;

            case "library":
                email.setSubject("New book request");
                email.setMessageBody(String.format("<h2>%s %s has requested a new book for the library:</h2><p>%s</p><a href='%s' target=\"_blank\" rel=\"noopener noreferrer\">Link to book</a><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getBookName(), feedback.getBookLink(), feedback.getEmailAddress()));
                return email;

            case "improvement":
                email.setSubject( "New improvement proposal");
                email.setMessageBody(isAnonymous
                        ? String.format("<h2>An anonymous improvement has been proposed:</h2><p>%s</p>", feedback.getFeedbackBody())
                        : String.format("<h2>%s %s has proposed an improvement:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress()));
                return email;

            default:
                return email;
        }
    }
}
