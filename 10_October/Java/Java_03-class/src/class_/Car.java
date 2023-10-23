package class_;

public class Car {
  /* 접근제어자
  - public: 같은 클래스, 같은 패키지, 다른 패키지, 자식 클래스, 전체 가능
  - protected: 같은 클래스, 같은 패키지, 자식 클래스 가능
  - default: 같은 클래스, 같은 패키지 가능
  - private: 같은 클래스 가능
   */

  // 멤버 변수
  private int speed;
  // 생성자: 클래스명과 동일해야 함
  public Car(int speed) {
    this.speed = speed;
  }

  // 메소드
  void start() {
    System.out.println("Start");
  }
  // g
  int getSpeed() {
    return this.speed;
  }

  void setSpeed(int speed) {
    if (speed > 0) this.speed = speed;
  }

  // 중복 방지를 위한 메소드
  void increaseSpeed(int speed) {
    this.speed += speed;
  }
}
