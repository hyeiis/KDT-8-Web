package kdt.codingon.SpringBoot._231031.controller;

import kdt.codingon.SpringBoot._231031.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AxiosPOST_Practice {
  @GetMapping("/info")
  public String main() {
    return "231031/info";
  }

  @PostMapping("/axios/info/response") // 값 리턴 o
  @ResponseBody
  public String axiosVoResponse(@RequestBody UserVO userVO) {
    String msg = userVO.getName() + "님, 회원가입 성공";
    return msg;
  }
}
