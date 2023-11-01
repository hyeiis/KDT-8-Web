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

  // ---- DTO ---- //
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
  public String dtoAPI3(@RequestBody UserDTO userDTO) {
    // → 오류!
    // @RequestBody: json 또는 xml 데이터 형식을 읽음
    // 일반 폼 전송 시 데이터 형식은 기본 값으로 x-www-form-urlencoded
    String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
    return msg;
  }

  // ---- VO ---- //
  @GetMapping("/vo/response1")
  @ResponseBody
  public String voAPI1(@ModelAttribute UserVO userVO) {
    // set함수가 없으면 @ModelAttribute로 값 할당 못함 (set함수를 이용해 값 매핑함)
    String msg = userVO.getName() + " " + userVO.getAge() + "!!!";
    return msg;
  }

  // ---- axios ---- //
  @GetMapping("/axios/response1") // 값 리턴 o
  @ResponseBody
  public String axiosResponse1(@RequestParam String name, @RequestParam String age) {
    String msg = "이름: " + name + ", 나이: " + age;
    return msg;
  }
  @GetMapping("/axios/response2") // 값 리턴 o
  @ResponseBody
  public String axiosResponse2(UserDTO userDTO) {
    String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    return msg;
  }

  @PostMapping("/axios/response3") // 값 리턴 x
  @ResponseBody
  // @RequestParam required 기본 값: true
  // axios로 값을 전달하게 될 경우, 파라미터로 값이 들어오지 않는데 (post로 보냈을 때), @RequestParam의 required가 기본값이 true이기 때문에 오류가 남
  public String axiosResponse3(@RequestParam String name, @RequestParam String age) {
    String msg = "이름: " + name + ", 나이: " + age;
    return msg;
  }
  @PostMapping("/axios/response4") // null 리턴
  @ResponseBody
  public String axiosResponse4(UserDTO userDTO) {
    String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    return msg;
  }
  @PostMapping("/axios/response5") // 값 리턴 o
  @ResponseBody
  public String axiosResponse5(@RequestBody UserDTO userDTO) {
    String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    return msg;
  }

  @GetMapping("/axios/vo/response2") // null 리턴
  @ResponseBody
  // @ModelAttribute로 값이 들어갈 때는 setter 함수를 실행해서 값을 넣어주기 떄문에 setter함구가 없는 UserVO에는 값이 들어갈 수 없다 (null)
  public String axiosVoResponse2(UserVO userVO) {
    String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    return msg;
  }

  @PostMapping("/axios/vo/response4") // null 리턴
  @ResponseBody
  public String axiosVoResponse4(UserVO userVO) {
    String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    return msg;
  }
  @PostMapping("/axios/vo/response5") // 값 리턴 o
  @ResponseBody
  public String axiosVoResponse5(@RequestBody UserVO userVO) {
    // @RequestBody로 값을 전달할 때 userVO에 setter 함수가 없어도 값이 들어간다
    // @RequestBody는 setter 함수 실행이 아니라 각각의 필드(변수)에 직접적으로 값을 주입하면서 매핑
    // @ModelAttribute가 setter 함수를 실행해 값을 넣어준다면 @RequesetBody는 각각의 필드(변수)에 직접적으로 값을 주입한다 → 필드에 내장된 set 함수 실행해서 값 주입
    String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    return msg;
  }
}


