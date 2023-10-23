package class_;

public class CarContainer {
  public static void main(String[] args) {
    Car bmw = new Car(30);
    Car kia = new Car(20);

    bmw.start();
    kia.start();

    // 잘못된 접근 방법
    // bmw.speed = 120;
    // kia.speed = 95;

    // 객체 보호
    // bmw.setSpeed(120);
    // kia.setSpeed(-95);

    bmw.setSpeed(120);
    kia.setSpeed(95);

    bmw.increaseSpeed(100);
    kia.increaseSpeed(100);

    // 중복 코드
    // int bmwSpeed = bmw.getSpeed();
    // bmwSpeed += 100;
    // bmw.setSpeed(bmwSpeed);
    //
    // int kiaSpeed = kia.getSpeed();
    // kiaSpeed += 100;
    // kia.setSpeed(kiaSpeed);

    System.out.println("BMW의 속도: " + bmw.getSpeed() + "km/h");
    System.out.println("KIA의 속도: " + kia.getSpeed() + "km/h");
  }
}
