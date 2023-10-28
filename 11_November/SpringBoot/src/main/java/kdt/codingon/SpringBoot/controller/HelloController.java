package kdt.codingon.SpringBoot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {
  @GetMapping("/")
  public String getHello(Model model) {
    model.addAttribute("msg", "<strong>hello</strong>");
    model.addAttribute("name", "kim");

    ArrayList<String> coffee = new ArrayList<>();
    coffee.add("아메리카노");
    coffee.add("카페라떼");
    coffee.add("바닐라라떼");
    coffee.add("카푸치노");
    model.addAttribute("coffee", coffee);

    return "hello";
  }

  @GetMapping("/hello")
  public String getHello2() {
    return "hello";
  }
}

