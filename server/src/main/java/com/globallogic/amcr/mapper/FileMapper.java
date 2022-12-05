package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Attachment;
import com.globallogic.amcr.payload.AttachmentResponse;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.Alias;

import java.util.UUID;

@Mapper
@Alias(value = "UUIDTypeHandler")
public interface FileMapper {

    @Insert("insert into files(id, file_name, file_type, data, download_uri, feedback_id) values(#{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=UUIDTypeHandler}, #{fileName}, #{fileType}, #{data}, #{downloadUri}, #{feedbackId, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=UUIDTypeHandler})")
    public int save(Attachment attachment);

    @Select("select * from files where id = #{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=UUIDTypeHandler}")
    public AttachmentResponse getFile(@Param("id") UUID id);
}
