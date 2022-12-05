package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.Alias;

import java.util.List;

@Mapper
@Alias(value = "UUIDTypeHandler")
public interface FeedbackMapper {

    @Insert("INSERT INTO feedback(id, feedback_type, first_name, last_name, email_address, feedback_body, book_name, book_link) VALUES (#{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=UUIDTypeHandler}, #{feedbackType}, #{firstName}, #{lastName}, #{emailAddress}, #{feedbackBody}, #{bookName}, #{bookLink})")
    public int save(Feedback feedback);

    @Select("SELECT feedback_type, first_name, last_name, email_address, feedback_body, book_name, book_link, download_uri FROM feedback LEFT OUTER JOIN files ON feedback.id = files.feedback_id")
    List<FeedbackResponse> getMany();
}
