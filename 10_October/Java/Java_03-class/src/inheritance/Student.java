package inheritance;

public class Student extends Person{
  private String major;
  public Student (String name, int age, String major) {
    // super(): 하위 클래스에서 상위 클래스 생성자를 호출할 때 사용. 상위 클래스에서 오버 라이드 된 메소드를 호출하는 데 사용
    super(name, age);
    this.major = major;
  }

  public String toString() {
    return super.toString() + ", major: " + major;
  }
}
