package inheritance;

public class Main {
  public static void main(String[] args) {
    // Person 클래스 객체 생성
    Person person = new Person("홍길동", 23);
    System.out.println(person.toString());
    // System.out.println(person.getName());
    // System.out.println(person.getAge());

    // Student 클래스 객체 생성
    Student student = new Student("이몽룡", 21, "컴공");
    System.out.println(student.toString());
    // System.out.println(student.getName());
    // System.out.println(student.getAge());
  }
}
