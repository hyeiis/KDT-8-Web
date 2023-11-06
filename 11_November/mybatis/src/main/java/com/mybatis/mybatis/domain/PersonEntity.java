package com.mybatis.mybatis.domain;

import jakarta.persistence.*;

@Entity
@Table(name="kdt8")
public class PersonEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(length = 31, nullable = false)
  private String userid;

  @Column(length = 31, nullable = false)
  private String name;

  @Column(nullable = false)
  private String password;

  private String email;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUserid() {
    return userid;
  }

  public void setUserid(String userid) {
    this.userid = userid;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
