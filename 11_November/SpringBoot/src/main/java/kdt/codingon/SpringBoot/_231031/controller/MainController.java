package kdt.codingon.SpringBoot._231031.controller;

import kdt.codingon.SpringBoot._231031.dto.UserDTO;
import kdt.codingon.SpringBoot._231031.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
// @RestController
public class MainController {
  @GetMapping("/request")
  public String main() {
    return "231031/request";
  }

  @GetMapping("/get/response1")
  public String getResponse1(@RequestParam(value = "name", required = true) String n, Model model) {
    model.addAttribute("name", n);
    return "231031/response";
  }

  @GetMapping("/get/response2")
  public String getResponse2(@RequestParam(value = "name", required = false) String n, Model model) {
    model.addAttribute("name", n);
    return "231031/response";
  }


  @GetMapping("/get/response3/{name}/{age}")
  public String getAPI3(@PathVariable String name, @PathVariable("age") String age, Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "231031/response";
  }

  @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}/{test}"})
  public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String age, Model model) {
    model.addAttribute("name", name);
    model.addAttribute("age", age);
    return "231031/response";
  }

  //----- POST ----//
  @PostMapping("/post/response1")
  public String postResponse1(@RequestParam String name, Model model) {
    // RequestBody: 클라이언트가 전달한 json 형탱의 내용을 JSON Object로 변환해준다
    model.addAttribute("name", name);
    return "231031/response";
  }

  @PostMapping("/post/response2")
  public String postResponse2(@RequestParam(required = false) String name, Model model) {
    model.addAttribute("name", name);
    return "231031/response"; // res.render(해당 뷰 열어줌)
  }

  // ResponseBody: api를 쓸 때 사용 → template를 호출하는 것이 아니라 값을 전달
  @PostMapping("/post/response3")
  @ResponseBody
  public String postResponse3(@RequestParam(required = false) String name, Model model) {
    model.addAttribute("name", name);
    return "231031/response"; // res.send 또는 res.json (해당 값 return)
  }

  // ---- DTO ----
  @GetMapping("/dto/response1")
  @ResponseBody
  public String dtoAPI1(@ModelAttribute UserDTO userDTO) {
    // get으로 받으면 url, post로 받으면 body에 있는 것들을 전달
    // @ModelAttribute: html 폼 데이터를 컨트롤러로 전달할 때 사용. get이나 post 전송에서 사용
    String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
    return msg;
  }
  // 일반 폼 GET 방식 - DTO (@ModelAttribute) 전송 가능
  // 일반 폼 GET 방식 = DTO (@RequestBody) 전송 불가 - 오류

  @PostMapping("/dto/response2")
  @ResponseBody
  public String dtoAPI2(UserDTO userDTO) {
    String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
    return msg;
  }

  @PostMapping("/dto/response3")
  @ResponseBody
  public String dtoAPI3(@RequestBody  UserDTO userDTO) {
    // → 오류!
    // @RequestBody: json 또는 xml 데이터 형식을 읽음
    // 일반 폼 전송 시 데이터 형식은 기본 값으로 x-www-form-urlencoded
    String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
    return msg;
  }

// ---- VO ----
  @GetMapping("/vo/response1")
  @ResponseBody
  public String voAPI1(@ModelAttribute UserVO userVO) {
    // set함수가 없으면 @ModelAttribute로 값 할당 못함 (set함수를 이용해 값 매핑함)
    String msg = userVO.getName() + " " + userVO.getAge() + "!!!";
    return msg;
  }
}


