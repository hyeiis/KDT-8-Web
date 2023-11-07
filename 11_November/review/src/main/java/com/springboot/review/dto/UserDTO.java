package com.springboot.review.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {
  private int id;
  private String name;
  private String nickname;
  private int no; // 실제 도메인에는 필요하지 않지만, 가져올 때는 필요한 정보
}
