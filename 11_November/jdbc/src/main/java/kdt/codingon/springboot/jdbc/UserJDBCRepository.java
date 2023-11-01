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
        INSERT INTO users (id, name, address) VALUES (1, 'gildong', 'seoul');
      """;
  public void insert() {
    jdbc.update(INSERT_USER);
  }
}
