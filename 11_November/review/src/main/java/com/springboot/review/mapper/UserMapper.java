package com.springboot.review.mapper;

import com.springboot.review.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserMapper {
  // mapper 참고하여 sql 실행
  List<User> retrieveAll();
  // mapper (xml 파일) 참고하지 않고 sql 실행
  @Insert("INSERT INTO user (name, nickname) VALUES (#{name}, #{nickname})")
  void insertUser(User user);
  @Update("")
  void updateUser(User user);
}
