package com.springboot.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDTOBuilder {
  private final int id;
  private final String name;

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder {
    private int id;
    private String name;

    public Builder id(int id) {
      this.id = id;
      return this;
    }

    public Builder name(String name) {
      this.name = name;
      return this;
    }

    public UserDTOBuilder build() {
      return new UserDTOBuilder(id, name);
    }
  }
}
