package com.globallogic.amcr.service;

import com.globallogic.amcr.model.Email;
import com.globallogic.amcr.model.Feedback;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public String sendMail(Feedback feedback) {
        try {
            Email email = createEmailFromFeedback(feedback);

            SimpleMailMessage mailMessage = new SimpleMailMessage();

            mailMessage.setFrom(email.getSender());
            mailMessage.setTo(email.getRecipient());
            mailMessage.setSubject(email.getSubject());
            mailMessage.setText(email.getMessageBody());
            mailSender.send(mailMessage);
            System.out.println("Success");
            return "Success";
        } catch (Exception e) {
            throw new RuntimeException(e);
//            return "There was a problem sending this email";
        }
    }

    private Email createEmailFromFeedback(Feedback feedback) {
        Boolean isAnonymous = feedback.getEmailAddress() == null;
        String sender = isAnonymous ? "anonymous" : feedback.getEmailAddress();
        String subject;
        String messageBody;
        switch (feedback.getFeedbackType()) {
            case "case-study":
                subject = "New case study proposal";
                messageBody = String.format("<h2>%s %s has proposed a new case study:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress());
                System.out.println(messageBody);
                return new Email(sender, subject, messageBody);

            case "feedback":
                subject = "New feedback";
                messageBody = isAnonymous
                        ? String.format("<h2>Anonymous feedback has been submitted:</h2><p>%s</p>", feedback.getFeedbackBody())
                        : String.format("<h2>%s %s has left some feedback:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress());
                return new Email(sender, subject, messageBody);

            case "library":
                subject = "New book request";
                messageBody = String.format("<h2>%s %s has requested a new book for the library:</h2><p>%s</p><a href='%s' >Link to book</a><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getBookName(), feedback.getBookLink(), feedback.getEmailAddress());
                return new Email(sender, subject, messageBody);

            case "improvement":
                subject = "New improvement proposal";
                messageBody = isAnonymous
                        ? String.format("<h2>An anonymous improvement has been proposed:</h2><p>%s</p>", feedback.getFeedbackBody())
                        : String.format("<h2>%s %s has proposed an improvement:</h2><p>%s</p><strong>Email address: %s</strong>", feedback.getFirstName(), feedback.getLastName(), feedback.getFeedbackBody(), feedback.getEmailAddress());
                return new Email(sender, subject, messageBody);

            default:
                return new Email();
        }
    }
}
