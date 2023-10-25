import static_.Rectangle;

import java.util.ArrayList;

interface Flyable {
  void fly();
}

abstract class Vehicle {
  String name;
  int maxSpeed;
  public Vehicle(String name, int maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  public String getName() {
    return name;
  }

  public int getMaxSpeed() {
    return maxSpeed;
  }

  public abstract void move();
}

class Car extends Vehicle {

  public Car(String name, int maxSpeed) {
    super(name, maxSpeed);
  }

  @Override
  public void move() {
    System.out.println("도로를 따라 이동중");
  }
}

class Airplane extends Vehicle implements Flyable {

  public Airplane(String name, int maxSpeed) {
    super(name, maxSpeed);
  }

  @Override
  public void move() {
    System.out.println("하늘을 날아가는 중");
  }

  @Override
  public void fly() {
    System.out.println("고드 10,000 피트에서 비행 중");
  }
}

public class Class_Total {
  public static void main(String[] args) {
    ArrayList<Vehicle> vehicleArrayList = new ArrayList<>();
    Car car = new Car("차", 100);
    Airplane airplane = new Airplane("비행기", 200);
    vehicleArrayList.add(car);
    vehicleArrayList.add(airplane);

    for (Vehicle vehicle : vehicleArrayList) {
      System.out.println(vehicle.getName());
      vehicle.move();
      if (vehicle instanceof Flyable) {
        ((Flyable) vehicle).fly();
      }
    }
  }
}
