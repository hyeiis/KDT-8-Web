package com.springboot.review.service;

import com.springboot.review.domain.User;
import com.springboot.review.dto.UserDTO;
import com.springboot.review.dto.UserDTOBuilder;
import com.springboot.review.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
  @Autowired
  UserMapper userMapper;

  public List<UserDTO> getUserList() {
    List<User> result = userMapper.retrieveAll();
    List<UserDTO> users = new ArrayList<>(); // 리턴할 결과 값
    for (int i = 0; i < result.size(); i++) {
      UserDTO user = UserDTO.builder().id(result.get(i).getId()).name(result.get(i).getName()).build();

      // UserDTO user = new UserDTO();
      // user.setId(result.get(i).getId());
      // user.setName(result.get(i).getName());
      // user.setNickname(result.get(i).getNickname());
      // user.setNo(result.get(i).getId() + 100);

      users.add(user);

      /* 위의 코드들을 아래의 코드로 바꿀 수도 있다
      UserDTOBuilder userdto = UserDTOBuilder.builder().id(result.get(i).getId()).name(result.get(i).getName()).build();
       */

    }
    return users;
  }

  public void insertUser(User user) {
    userMapper.insertUser(user);
  }
}
