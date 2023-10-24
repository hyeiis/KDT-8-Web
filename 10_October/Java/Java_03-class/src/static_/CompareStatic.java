package static_;

// static 없는 경우
class NonStatic {
  private int registered = 0;
  private String name;

  public NonStatic(String name) {
    this.name = name;
    registered++;
  }

  public int getRegistered() {
    return registered;
  }
}

// static 있는 경우
class Static {
  private String name;
  private static int registered = 0;

  public Static(String name) {
    this.name = name;
    registered ++;
  }

  public int getRegistered() {
    return registered;
  }
}

class MathUtil {
  private static final double PI = 3.14;
  // static 메소드
  public static double circle(double radius) {
    return PI * radius * radius;
  }
}

public class CompareStatic {
  public static void main(String[] args) {
    double circle = MathUtil.circle(4.5);
    System.out.println("반지름이 4.5인 원의 넓이: " + circle);

    NonStatic a = new NonStatic("홍길동");
    NonStatic b = new NonStatic("이몽룡");
    System.out.println("----- Non Static -----");
    System.out.println("홍길동: " + a.getRegistered());
    System.out.println("이몽룡: " + b.getRegistered());

    Static s1 = new Static("홍길순");
    Static s2 = new Static("성춘향");
    System.out.println("----- Static -----");
    System.out.println("홍길순: " + s1.getRegistered());
    System.out.println("성춘향: " + s2.getRegistered());
  }
}
