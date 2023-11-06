package com.jpa.crud.board.controller;

import com.jpa.crud.board.dto.BoardDTO;
import com.jpa.crud.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class BoardController {
  @Autowired
  private BoardService boardService;

  // 전체 게시물 조회
  @GetMapping("/board")
  @ResponseBody
  public List<BoardDTO> findAllBoard() {
    return  boardService.findAllBoard();
  }

  // 게시판 글 작성
  @PostMapping ("/register")
  @ResponseBody
  public boolean boardRegister(@RequestBody BoardDTO boardDTO) {
    return boardService.createBoard(boardDTO);
  }

  // 게시물 수정
  @PatchMapping("/update")
  @ResponseBody
  public boolean boardUpdate(@RequestBody BoardDTO boardDTO) {
    return boardService.updateBoard(boardDTO);
  }

  // 게시물 삭제
  @DeleteMapping("/delete")
  @ResponseBody
  public boolean boardDelete(@RequestBody BoardDTO boardDTO) {
    return boardService.deleteBoard(boardDTO);
  }
}
