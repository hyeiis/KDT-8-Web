package com.mybatis.mybatis.repository;

import com.mybatis.mybatis.domain.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<PersonEntity, Integer> {

  PersonEntity findByUseridAndPassword(String userid, String password);

  void deleteByUserid(String userid);
}

