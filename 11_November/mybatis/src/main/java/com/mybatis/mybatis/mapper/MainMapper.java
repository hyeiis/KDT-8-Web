package com.mybatis.mybatis.mapper;

import com.mybatis.mybatis.domain.Users;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {
  // xml 참고하기
  List<Users> findAll();

  // xml 참고하기 (어노테이션 이용)
  @Insert("INSERT INTO users (name, address) VALUES (#{name}, #{address})")
  void insertUser(Users user);

}
