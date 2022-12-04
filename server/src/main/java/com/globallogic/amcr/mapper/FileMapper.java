package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Attachment;
import com.globallogic.amcr.payload.AttachmentResponse;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.UUID;

@Mapper
public interface FileMapper {

    @Insert("insert into files(id, file_name, file_type, data, download_uri, feedback_id) values(#{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler}, #{fileName}, #{fileType}, #{data}, #{downloadUri}, #{feedbackId, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler})")
    public int save(Attachment attachment);

    @Select("select * from files where id = #{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler}")
    public AttachmentResponse getFile(@Param("id") UUID id);
}
