package kdt.codingon.SpringBoot._231030.HelloWorld;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

record Person(String name, int age) {}
record Address(String address, int postCode) {}
record Information(String name, int age, Address address) {}

@Configuration
public class HelloWorldConfiguration {
  @Bean
  public String name() {
    return "KDT8";
  }

  @Bean
  public int age() {
    return 20;
  }

  @Bean
  public Person person() {
    return new Person("gildong", 20);
  }
  @Bean (name = "myAddress")
  public Address address() {
    return new Address("Seoul", 23232);
  }
  @Bean
  @Primary
  public Address address2() {
    return new Address("Daegu", 13442);
  }
  @Bean
  // * 메소드로 값 출력
  // public Information info() {
  //   return new Information(name(), age(), address());
  // }
  // * 매개변수로 값 출력
  public Information info(String name, int age, Address myAddress) {
    return new Information(name, age, myAddress);
  }

}
