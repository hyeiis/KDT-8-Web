package abstract_;

// 추상 클래스
abstract class Animals {
  // 추상 메소드: 하위 클래스에서 구현해야 하는 메소드
  abstract public void sound();

  public void sleep() {
    System.out.println("쿨쿨..");
  }
}

// 추상 클래스 Animal 상속 받는 Dog 클래스
class Dog extends Animals {
  @Override
  public void sound() {
    System.out.println("멍멍");
  }
}

class Hen extends Animals {
  @Override
  public void sound() {
    System.out.println("꼬꼬댁");
  }
}

public class AbstractEx {
  public static void main(String[] args) {
    Dog dog = new Dog();
    Hen hen = new Hen();

    dog.sound();
    hen.sound();
    dog.sleep();
    hen.sleep();
  }
}
