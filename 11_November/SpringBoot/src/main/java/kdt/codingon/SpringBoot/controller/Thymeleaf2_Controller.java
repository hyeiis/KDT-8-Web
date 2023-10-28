package kdt.codingon.SpringBoot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class Thymeleaf2_Controller {
  @GetMapping("/people")
  public String getThymeleaf2(Model model) {
    ArrayList<Person> people = new ArrayList<>();
    people.add(new Person("Hong", 20));
    people.add(new Person("Kim", 22));
    people.add(new Person("Park", 24));
    people.add(new Person("Lee", 26));
    people.add(new Person("Jo", 28));

    model.addAttribute("people", people);
    return "thymeleaf2";
  }

  static class Person {
    String name;
    int age;

    public Person(String name, int age) {
      this.name = name;
      this.age = age;
    }

    public String getName() {
      return name;
    }

    public int getAge() {
      return age;
    }
  }
}