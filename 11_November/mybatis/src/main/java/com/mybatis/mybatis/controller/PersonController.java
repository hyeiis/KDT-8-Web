package com.mybatis.mybatis.controller;

import com.mybatis.mybatis.dto.PersonDTO;
import com.mybatis.mybatis.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class PersonController {
  @Autowired
  private PersonService personService;

  @GetMapping("/login")
  public String getLogin() {
    return "login";
  }

  @GetMapping("/register")
  public String getRegister() {
    return "register";
  }

  @GetMapping("/profile/{id}")
  public String profile(@PathVariable("id") int id, Model model) {
    Optional<PersonDTO> person = personService.profile(id);
    if( person.isPresent()) {
      model.addAttribute("person", person.get());
      return "profile";
    } else {
      return "error";
    }
  }

  @PostMapping("/login")
  @ResponseBody
  public PersonDTO login(@RequestBody PersonDTO personDTO) {
    return personService.selectPerson(personDTO);
  }

  @PostMapping("/register")
  @ResponseBody
  public boolean register(@RequestBody PersonDTO personDTO) {
    personService.insertPerson(personDTO);
    return true;
  }

  @PatchMapping("/profile/{id}/update")
  @ResponseBody
  public boolean update(@RequestBody PersonDTO personDTO) {
    personService.updatePerson(personDTO);
    return true;
  }

  @DeleteMapping("/profile/{id}/delete")
  @ResponseBody
  public boolean delete(@RequestBody PersonDTO personDTO) {
    personService.deletePerson(personDTO);
    return true;

  }

}
