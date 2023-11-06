package com.mybatis.mybatis.service;

import com.mybatis.mybatis.domain.Users;
import com.mybatis.mybatis.dto.UsersDTO;
import com.mybatis.mybatis.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
  @Autowired
  private MainMapper mainMapper;

  public List<UsersDTO> getUserList() {
    // 실제 데이터베이스에서 가져오는 Users 배열
    List<Users> result = mainMapper.findAll();
    // 위에서 받은 Users 배열을 UsersDTO 배열로 반환
    List<UsersDTO> users = new ArrayList<>();

    for (int i = 0; i < result.size(); i++) {
      UsersDTO user = new UsersDTO();
      user.setId(result.get(i).getId());
      user.setName(result.get(i).getName());
      user.setAddress(result.get(i).getAddress());

      users.add(user);
    }
    return  users;
  }
  public void addUser(Users user) {
    mainMapper.insertUser(user);
  }

}
