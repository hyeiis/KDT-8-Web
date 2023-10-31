package kdt.codingon.SpringBoot._231031.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// @Getter와 @Setter를 클래스에 붙이면 클래스의 모든 변수에 getter와 setter를 만듦
public class UserDTO {
  private String name;
  private String age;


}
