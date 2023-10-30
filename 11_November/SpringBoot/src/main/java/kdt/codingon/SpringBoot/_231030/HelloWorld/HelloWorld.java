package kdt.codingon.SpringBoot._231030.HelloWorld;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class HelloWorld {
  public static void main(String[] args) {
    // 스프링 컨텍스트 실행하는 단계
    var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
    // 스프링프레임워크가 관리하도록 설정
    // getBean()에 들어갈 이름: Configuration에서 작성한 Bean을 정의한 메소드 이름
    // 스프링에서 관리하는 것은 무엇이든 Bean이 될 수 있음
    System.out.println(context.getBean("name"));
    System.out.println(context.getBean("age"));
    System.out.println(context.getBean("person"));
    System.out.println(context.getBean("myAddress"));
    System.out.println(context.getBean("info"));
    System.out.println(context.getBean(Information.class));
    System.out.println(context.getBean(Address.class));
    // Address가 2개이기 때문에 Address.class를 출력하면 오류가 남. @Primary를 하면 최우선순위를 가져오기 때문에 오류 x

    String[] beans = context.getBeanDefinitionNames();
    for(String name: beans) {
      System.out.println(name);
    }
  }
}
