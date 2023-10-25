package interface_;

interface Controller {
  void powerOn();
  void powerOff();
  default void display() {
    System.out.println("display");
  };
}

class TV implements Controller{

  @Override
  public void powerOn() {
    System.out.println("TV power On");
  }

  @Override
  public void powerOff() {
    System.out.println("TV power Off");
  }
}

class Computer implements Controller {

  @Override
  public void powerOn() {
    System.out.println("Computer power On");
  }

  @Override
  public void powerOff() {
    System.out.println("Computer power On");
  }
}

public class Electronic {
  public static void main(String[] args) {
    TV tv = new TV();
    Computer computer = new Computer();

    tv.display();
    tv.powerOn();
    tv.powerOff();
    computer.display();
    computer.powerOn();
    computer.powerOff();
  }
}
