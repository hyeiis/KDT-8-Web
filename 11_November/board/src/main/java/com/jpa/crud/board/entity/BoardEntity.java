package com.jpa.crud.board.entity;


import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "board_entity")
public class BoardEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  @Column(length = 127, nullable = false)
  private String title;
  @Column(length = 1000, nullable = false)
  private String content;
  @Column(nullable = false)
  private String author;
  @CreationTimestamp
  private LocalDateTime createAt;
  @UpdateTimestamp
  private LocalDateTime updateAt;


  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public int getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }
}