package com.springboot.review.service;

import com.springboot.review.domain.Board;
import com.springboot.review.dto.BoardDTO;
import com.springboot.review.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
  @Autowired
  BoardMapper boardMapper;

  public List<BoardDTO> getAll(){
    // getAll()함수는 "select * from board" sql을 실행하는 친구
    List<Board> result = boardMapper.getAll();
    List<BoardDTO> list = new ArrayList<BoardDTO>();

    for ( Board board : result ) {
      // BoardDTO boardDTO = new BoardDTO();
      BoardDTO boardDTO = BoardDTO.builder()
          .id(board.getId())
          .title(board.getTitle())
          .content(board.getContent())
          .writer(board.getWriter())
          .registered(board.getRegistered())
          .no(board.getWriter() + board.getId())
          .build();
      list.add(boardDTO);
    }
    return list;
  }
  public void insertBoard(Board board) {
    boardMapper.insertBoard(board);
  }
  public void patchBoard(Board board) {
    boardMapper.patchBoard(board);
  }
  public void deleteBoard(int id) {
    boardMapper.deleteBoard(id);
  }
  public int searchBoard(String word) {
    // select 문 자체를 count로 동작시킬 수도 있고
    // v List 로 받아와서 그에 대한 길이를 전달할 수도 있다.
    List<Board> result = boardMapper.searchBoard(word);
    return result.size();
  }
}
