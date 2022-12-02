package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Feedback;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.StatementType;

@Mapper
public interface FeedbackMapper {

    @Options(useGeneratedKeys=true, keyProperty="id", keyColumn="id")
    @Insert("insert into feedback(first_name, last_name, email_address, feedback_body, book_name, book_link) values (#{firstName}, #{lastName}, #{emailAddress}, #{feedbackBody}, #{bookName}, #{bookLink})")
    public long save(Feedback feedback);
}
