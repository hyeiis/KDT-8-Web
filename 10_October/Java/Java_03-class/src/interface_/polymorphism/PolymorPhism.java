package interface_.polymorphism;

// 1. 일반 클래스를 사용한 다형성
class Animal {
  public void sound() {
    System.out.println("동물은 소리를 냅니다");
  }
}

class Cat extends Animal {
  @Override
  public void sound() {
    System.out.println("야옹");
  }
}

class Dog extends Animal {
  @Override
  public void sound() {
    System.out.println("멍멍");
  }
}

// 2. 추상 클래스 사용한 다형성
abstract class Shape {
  abstract double area();
}

class Circle extends Shape {
  double radius;

  public Circle(double r) {
    this.radius = r;
  }

  @Override
  double area() {
    return Math.PI * radius * radius;
  }
}

class Rectangle extends Shape {
  double width, height;

  public Rectangle(double w, double h) {
    this.width = w;
    this.height = h;
  }

  @Override
  double area() {
    return width * height;
  }
}
// 3. 인터페이스를 사용한 다형성
interface Flyable {
  void fly();
}

class Bird implements Flyable {
  @Override
  public void fly() {
    System.out.println("새가 난다");
  }
}

class Airplane implements Flyable {
  @Override
  public void fly() {
    System.out.println("비행기가 난다");
  }
}
public class PolymorPhism {
  public static void main(String[] args) {
    Cat cat = new Cat();
    Dog dog = new Dog();

    cat.sound();
    dog.sound();

    Circle circle = new Circle(3);
    Rectangle rectangle = new Rectangle(4, 5);
    System.out.println("반지름이 " + circle.radius + "인 원의 넓이: " + circle.area());
    System.out.println("가로가 " + rectangle.width + "이고, 세로가 " + rectangle.height + "인 사각형의 넓이: " + rectangle.area());

    Bird bird = new Bird();
    Airplane airplane = new Airplane();
    bird.fly();
    airplane.fly();
  }
}
