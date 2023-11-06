package com.mybatis.mybatis.controller;

import com.mybatis.mybatis.domain.Users;
import com.mybatis.mybatis.dto.UsersDTO;
import com.mybatis.mybatis.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MainController {
  @Autowired
  private MainService mainService;

  @GetMapping("/users")
  public String getUsers(Model model) {
    List<UsersDTO> userList = mainService.getUserList();
    model.addAttribute("list", userList);
    return "user";
  }

  @GetMapping("/insert")
  public String getInsertUser(@RequestParam String name, @RequestParam String address, Model model) {
    Users user = new Users();
    user.setName(name);
    user.setAddress(address);

    mainService.addUser(user);

    model.addAttribute("list", null);
    return "user";
  }

}

/* @Autowired
* Spring 컨테이너가 자동으로 해당 타입의 Bean을 필드나 메서드에 주입함
* 1. 필드 주입: Spring이 자동으로 필드에 주입
* - 장점: 코드 간결
* - 단점: 의존성을 변경시키거나 테스트에 어려움이 생길 수 있다
* 2. 생성자 주입: Spring이 생성자의 파라미터 타입에 맞는 Bean을 찾아 주입
* - 불변성 보장(객체의 상태가 생성된 후 변경되지 않음)
*
* @Autowired VS new
* - 공통점: 객체를 생성하고 참조하는 데 사용
* - 차이점
*   - @Autowired: Spring의 IoC 컨테이너를 통해 의존성 주입
*   - new: 개발자가 명시적으로 객체를 생성
* */