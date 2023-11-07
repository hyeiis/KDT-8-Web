package com.springboot.review.controller;

import com.springboot.review.domain.User;
import com.springboot.review.dto.UserDTO;
import com.springboot.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class UserController {
  // C, R
  // [순서] sql 이용해 table 생성 → 도메인 생성 → mapper → service → controller
  @Autowired
  UserService userService;

  @GetMapping("/")
  public String getUsers(Model model) {
    List<UserDTO> users = userService.getUserList();
    // mybatis를 통해 전달된 정보를 받아와 users에 넣고
    model.addAttribute("list", users);
    // 템플릿으로 값을 전달하는 model에 담아 전달
    return "user";
  }

  @GetMapping("/user")
  public String getUserInsert(@RequestParam String name, @RequestParam String nickname, Model model) {
    User user = new User();
    user.setName(name);
    user.setNickname(nickname);

    userService.insertUser(user);
    model.addAttribute("");
    return "user";
  }
}
