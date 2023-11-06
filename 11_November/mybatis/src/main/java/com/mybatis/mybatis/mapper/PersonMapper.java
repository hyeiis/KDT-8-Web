package com.mybatis.mybatis.mapper;

import com.mybatis.mybatis.domain.Person;
import org.apache.ibatis.annotations.*;


@Mapper
public interface PersonMapper {
  @Select("SELECT * FROM person WHERE (userid = #{userid} and password = #{password})")
  boolean selectPerson(String userid, String password);
  @Select("SELECT * FROM person WHERE id = #{id}") //사용자 환경 조회
  Person profile(int id);

  @Insert("INSERT INTO person (userid, password, name) VALUES (#{userid}, #{password}, #{name})")
  void insertPerson(Person person);

  @Update("UPDATE person SET name = #{name}, password = #{password} WHERE id = #{id}")
  void updatePerson(Person person);

  @Delete("DELETE FROM person WHERE id = #{id}")
  void deletePerson(int id);
}