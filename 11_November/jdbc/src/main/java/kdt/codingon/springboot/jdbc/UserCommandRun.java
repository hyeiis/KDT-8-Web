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
    user.insert(new Users(1, "gildong", "seoul"));
    user.insert(new Users(2, "harry", "seoul"));
    user.insert(new Users(3, "john", "seoul"));
    user.insert(new Users(4, "jane", "seoul"));

    user.deleteUser(2);
    System.out.println(user.findUser(3));
  }
}
