package kdt.codingon.springboot.jdbc;

import org.springframework.context.annotation.Bean;

public class Users {
  private long id;
  private String name;
  private String address;
  public Users() {}

  public Users(long id, String name, String address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Users{" + "id=" + id + ", name='" + name + '\'' + ", address='" + address + '\'' + '}';
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }
}
