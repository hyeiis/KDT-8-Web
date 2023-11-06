package com.jpa.crud.board.repository;

import com.jpa.crud.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
  // select * from board_entity where author = :author;
  @Query("SELECT p FROM BoardEntity p WHERE p.author = :author") // p는 그냥 별칭, 다른 것으로 해도 됨
  Optional <BoardEntity> findByAuthor(@Param("author") String author); // null 값 처리
}
