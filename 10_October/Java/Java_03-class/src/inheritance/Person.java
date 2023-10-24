package inheritance;

public class Person {
  private String name;
  private int age;

  // 생성자
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Getter
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }
  public String toString() {
    return "Person name: " + name + ", age: " + age ;
  }
}
