package com.mybatis.mybatis.service;

import com.mybatis.mybatis.domain.Person;
import com.mybatis.mybatis.domain.PersonEntity;
import com.mybatis.mybatis.dto.PersonDTO;
import com.mybatis.mybatis.mapper.PersonMapper;
import com.mybatis.mybatis.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonService {
  @Autowired
  private PersonMapper personMapper;

  @Autowired
  private PersonRepository personRepository;

  public PersonDTO selectPerson(PersonDTO personDTO) {
    // Boolean person = personMapper.selectPerson(personDTO.getUserid(), personDTO.getPassword());
    PersonEntity person = personRepository.findByUseridAndPassword(personDTO.getUserid(), personDTO.getPassword());

    PersonDTO data = new PersonDTO();
    data.setId(person.getId());
    return data;

    // System.out.println(person);
  }

  public Optional<PersonDTO> profile(int id) {
    // Person person = personMapper.profile(id);
    Optional<PersonEntity> person = personRepository.findById(id);

    if( person.isPresent() ) {
      PersonDTO data = new PersonDTO();
      data.setId(person.get().getId());
      data.setUserid( person.get().getUserid());
      data.setName(person.get().getName());
      data.setPassword(person.get().getPassword());
      return Optional.of(data);
    } else {
      return Optional.empty();
    }
  }

  public void insertPerson(PersonDTO personDTO) {
    // Person person = new Person();
    PersonEntity person = new PersonEntity();

    person.setUserid(personDTO.getUserid());
    person.setPassword(personDTO.getPassword());
    person.setName(personDTO.getName());

    // personMapper.insertPerson(person);
    personRepository.save(person);
  }

  public void deletePerson(PersonDTO personDTO) {
    //personMapper.deletePerson(personDTO.getId());
    personRepository.deleteById(personDTO.getId());
  }

  public void updatePerson(PersonDTO personDTO) {
    //Person person = new Person();
    //personMapper.updatePerson(person); //mapper

    Optional<PersonEntity> person = personRepository.findById(personDTO.getId());

    System.out.println(person);
    if( person.isPresent() ) {
      PersonEntity data = person.get();
      data.setName( personDTO.getName() );
      data.setPassword( personDTO.getPassword() );
      // data.setUserid( personDTO.getUserid());

      personRepository.save(data);
    }
  }
}
