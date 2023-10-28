package kdt.codingon.SpringBoot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class Thymeleaf1_Controller {
  @GetMapping("/thymeleaf1")
  public String getThymeleaf1(Model model) {
    // int age = 10;
    int age = 20;
    model.addAttribute("age", age);

    return "thymeleaf1";
  }

}
