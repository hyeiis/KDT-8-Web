package inheritance.Practice;

public class Vehicle {
  private String model = "";
  private int wheelCnt = 0;

  public Vehicle(String model, int wheelCnt) {
    this.model = model;
    this.wheelCnt = wheelCnt;
  }

  public static void main(String[] args) {
    Bus bus = new Bus("Bus", 4, 30);
    Car car = new Car("Car", 4, 5);
    Motorcycle motorcycle = new Motorcycle("Motorcycle", 2, 1);

    System.out.println(bus.toString());
    System.out.println(car.toString());
    System.out.println(motorcycle.toString());
  }

  public String toString() {
    return "차 종: " + model + " 바퀴 개수: " + wheelCnt;
  }
}
