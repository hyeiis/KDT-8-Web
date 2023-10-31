package kdt.codingon.SpringBoot._231031.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class API_GET_Practice {
  @GetMapping("/introduce/{name}")
  public String getName(@PathVariable(value = "name") String name, Model model){
    model.addAttribute("name", name);
    return "231031/response";
  }
  @GetMapping("/introduce2")
  public String getInfo(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age, Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "231031/response";
  }
}
