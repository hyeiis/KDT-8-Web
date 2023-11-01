package kdt.codingon.springboot.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserJDBCRepository {
  @Autowired
  private JdbcTemplate jdbc;
  private static String INSERT_USER =
      """
        INSERT INTO users (id, name, address) VALUES (?, ?, ?);
      """;
  private static String DELETE_USER =
      """
       DELETE FROM users WHERE id = ?; 
      """;

  public void insert(Users users) {
    jdbc.update(INSERT_USER, users.getId(), users.getName(), users.getAddress());
  }
  public void deleteUser(long id) {
    jdbc.update(DELETE_USER, id);
  }
}
