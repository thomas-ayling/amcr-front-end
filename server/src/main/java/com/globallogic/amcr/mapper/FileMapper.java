package com.globallogic.amcr.mapper;

import com.globallogic.amcr.datasource.DataSource;
import com.globallogic.amcr.model.Attachment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Mapper
public interface FileMapper {
    @Insert("insert into files(id, file_name, data, feedback_id) values(#{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler}, #{fileName}, #{data}, #{feedbackId, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler})")
    public int save(Attachment attachment);
}
