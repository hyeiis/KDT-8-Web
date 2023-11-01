package kdt.codingon.springboot.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandRun  implements CommandLineRunner {
  @Autowired
  private  UserJDBCRepository user;
  @Override
  public void run(String... args) throws Exception {
    user.insert();
  }
}
