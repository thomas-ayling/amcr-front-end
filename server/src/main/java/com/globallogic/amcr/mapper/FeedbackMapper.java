package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Feedback;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Results;

@Mapper
public interface FeedbackMapper {
    @Insert("insert into feedback(first_name, last_name, email_address, feedback_body, book_name, book_link) values (#{firstName}, #{lastName}, #{emailAddress}, #{feedbackBody}, #{bookName}, #{bookLink})")
    @Options(keyProperty="row.id")
    public int save(Feedback feedback);
}
