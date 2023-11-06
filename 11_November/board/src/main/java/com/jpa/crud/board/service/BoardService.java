package com.jpa.crud.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import com.jpa.crud.board.domain.BoardEntity;
import com.jpa.crud.board.dto.BoardDTO;
import com.jpa.crud.board.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
  @Autowired
  private BoardRepository boardRepository;


  // 전체 게시물 조회
  public List<BoardDTO> findAllBoard() {
    List<BoardEntity> allBoard = boardRepository.findAll();
    List<BoardDTO> boards = new ArrayList<>();
    for (int i = 0; i < allBoard.size(); i++) {
      BoardDTO board = new BoardDTO();
      board.setTitle(allBoard.get(i).getTitle());
      board.setContent(allBoard.get(i).getContent());
      board.setAuthor(allBoard.get(i).getAuthor());
      board.setId(allBoard.get(i).getId());

      boards.add(board);
    }

    return boards;
  }


  // 게시물 작성
  public boolean createBoard(BoardDTO boardDTO) {
    BoardEntity board = new BoardEntity();
    board.setTitle(boardDTO.getTitle());
    board.setContent(boardDTO.getContent());
    board.setAuthor(boardDTO.getAuthor());

    boardRepository.save(board);
    return true;
  }
  // 게시물 수정
  public boolean updateBoard(BoardDTO boardDTO) {
    Optional<BoardEntity> board = boardRepository.findById(boardDTO.getId());
    if(board.isPresent()) {
      BoardEntity data = board.get();
      data.setTitle(boardDTO.getTitle());
      data.setContent(boardDTO.getContent());

      boardRepository.save(data);
    }
    return true;
  }

  // 게시물 삭제
  public boolean deleteBoard(BoardDTO boardDTO){
    boardRepository.deleteById(boardDTO.getId());
    return true;
  }
}