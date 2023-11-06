package com.mybatis.mybatis.dto;

public class PersonDTO {
  public void setId(int id) {
    this.id = id;
  }

  private int id;
  private String userid;
  private String password;
  private String name;

  public int getId() {
    return id;
  }

  public String getUserid() {
    return userid;
  }

  public void setUserid(String userid) {
    this.userid = userid;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
