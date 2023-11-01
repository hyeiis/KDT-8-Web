package kdt.codingon.SpringBoot._231101.controller;

import kdt.codingon.SpringBoot._231101.dto.UserDTO_1101;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class UserController {
  @GetMapping("/user/login")
  public String login() {
    return "231101/login";
  }

  @PostMapping("/user/login/response")
  @ResponseBody
  public String loginResponse(UserDTO_1101 userDTO) {
    String msg;
    if(userDTO.getId() != null || userDTO.getPassword() != null) {
      msg = userDTO.getNickname() + "님, 로그인 성공";
    } else {
      msg = "로그인 실패";
    }
    return msg;
  }

  @PostMapping("/user/signup/response")
  @ResponseBody
  public String signupResponse(UserDTO_1101 userDTO) {
    String msg = "회원가입 성공";
    return msg;
  }

  @PatchMapping("/user/update/response")
  @ResponseBody
  public String updateResponse(UserDTO_1101 useDTO) {
    return "";
  }

  @DeleteMapping("/user/delete/response")
  @ResponseBody
  public String deleteResponse(UserDTO_1101 userDTO) {
    String msg = "회원 탈퇴 성공";
    return msg;
  }
}
