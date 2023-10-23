package static_;

class Student {
  private String name;
  // static 변수는 클래스의 모든 instance에서 공통으로 사용
  private static int studentCount = 0;

  public Student(String name) {
    this.name = name;
    this.studentCount ++;
  }

  public static int getStudentCount() {
    return studentCount;
  }
}

public class StaticTest {
  public static void main(String[] args) {
    Student s1 = new Student("홍길금");
    Student s2 = new Student("홍길은");
    Student s3 = new Student("홍길동");

    System.out.println(Student.getStudentCount() + "명");
  }
}