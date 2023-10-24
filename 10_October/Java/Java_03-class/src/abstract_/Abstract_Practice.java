package abstract_;

abstract class Student {
  private String school, name;
  private int age, code;
  public Student(String school, String name, int age, int code) {
    this.school = school;
    this.name = name;
    this.age = age;
    this.code = code;
  }
  public String getSchool() {
    return school;
  }
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public int getCode() {
    return code;
  }
  abstract public void todo();
}

class Kim extends Student {
  public Kim(String school, String name, int age, int code) {
    super(school, name, age, code);
  }

  @Override
  public void todo() {
    System.out.println("이름: " + getName() + ", 학교: " + getSchool() + ", 나이: " + getAge() + ", 학번: " + getCode());
    System.out.println("점심은 김가네 김밥");
  }
}

class Baek extends Student {
  public Baek(String school, String name, int age, int code) {
    super(school, name, age, code);
  }
  @Override
  public void todo() {
    System.out.println("이름: " + getName() + ", 학교: " + getSchool() + ", 나이: " + getAge() + ", 학번: " + getCode());
    System.out.println("점심은 백종원 피자");
  }
}

public class Abstract_Practice {
  public static void main(String[] args) {
    Kim kim = new Kim("A대", "김씨", 22, 202134);
    Baek baek = new Baek("B대", "백씨", 20, 232134);

    kim.todo();
    baek.todo();
  }
}