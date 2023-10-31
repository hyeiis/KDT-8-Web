package kdt.codingon.SpringBoot._231031.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class POST_Practice {
  @GetMapping("/info")
  public String main() {
    return "231031/info";
  }
  @PostMapping("/info/post_response")
  public String getInfo(@RequestParam  String name, @RequestParam String gender, @RequestParam  String birth, @RequestParam  String interest, Model model) {
    model.addAttribute("name", name);
    model.addAttribute("gender", gender);
    model.addAttribute("birth", birth);
    model.addAttribute("interest", interest);
    return "231031/info_response";
  }
}
