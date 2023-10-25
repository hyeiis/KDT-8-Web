package interface_;

interface Move {
  void moveForward();
  void moveBackward();
}

interface Power {
  void on();
  void off();
}

interface Car extends Move, Power {
  void changeGear(int gear);
}

class SUV implements Car {

  @Override
  public void moveForward() {
    System.out.println("앞으로 이동");
  }

  @Override
  public void moveBackward() {
    System.out.println("뒤로 이동");
  }

  @Override
  public void on() {
    System.out.println("Engine ON");
  }

  @Override
  public void off() {
    System.out.println("Engine OFF");
  }

  @Override
  public void changeGear(int gear) {
    System.out.println("Gear change: " + gear);
  }
}
public class InterfaceExample {
  public static void main(String[] args) {
  SUV  mySUV = new SUV();
    mySUV.on();
    mySUV.changeGear(4);
    mySUV.moveForward();
    mySUV.moveBackward();
  mySUV.off();
  }
}
