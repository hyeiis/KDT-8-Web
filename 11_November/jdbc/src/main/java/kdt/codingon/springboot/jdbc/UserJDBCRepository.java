package kdt.codingon.springboot.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
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
  private static String SELECT_USER =
      """
       SELECT * FROM users WHERE id = ?;
      """;

  /* JDBC 주요 메소드
  - queryForObject(): 한 행만 반환할 때 사용
  - queryForMap(): 한 행만 반환할 때 사용. 데이터를 Map 형태로 반환
  - queryForInt(): 단일 값 반환할 때 사용. Int형 데이터로 반환(ex., SELECT count(*) FROM users;)
  - query(): 여러 행을 반환하는 쿼리 결과 처리할 때 사용
  - update(): INSERT, UPDATE, DELETE와 같은 SQL문 실행할 때 사용
  - execute(): 반환 값이 없는 SQL문 실행할 때 사용
   */
  public void insert(Users users) {
    jdbc.update(INSERT_USER, users.getId(), users.getName(), users.getAddress());
  }
  public void deleteUser(long id) {
    jdbc.update(DELETE_USER, id);
  }
  public Users findUser(long id) {
    // Users 클래스의 인스턴스로 매핑하기 위해 new BeanPropertyRowMapper 사용
    // BeanPropertyRowMapper: 데이터베이스 테이블의 컬럼과 Java Bean의 프로퍼티 이름을 자동으로 매칭
    return jdbc.queryForObject(SELECT_USER, new BeanPropertyRowMapper<>(Users.class), id);
  }
}
