package com.springboot.review.mapper;

import com.springboot.review.domain.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<Board> getAll();
  void insertBoard(Board board);
  void patchBoard(Board board);
  void deleteBoard(int id);
  List<Board> searchBoard(String word);
}
