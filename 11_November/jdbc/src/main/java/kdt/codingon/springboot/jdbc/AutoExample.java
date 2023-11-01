package kdt.codingon.springboot.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

@Component
class AutoWiredExample {
  public String sayHello(String name) {
    return "Hello " + name;
  }
}

@Component
public class AutoExample {
  private final AutoWiredExample autoWired;
  @Autowired
  public AutoExample(AutoWiredExample autoWired) {
    this.autoWired = autoWired;
  }

  @GetMapping("/hello")
  public String hello(){
    return autoWired.sayHello("gildong");
  }
}
