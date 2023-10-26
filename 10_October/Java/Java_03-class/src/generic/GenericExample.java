package generic;

interface Movable {
  void move();
}

// 제네릭 클래스
class Box<T extends Number> {
  private T item;

  public T getItem() {
    return item;
  }

  public void setItem(T item) {
    this.item = item;
  }
}

class Car implements Movable {
  @Override
  public void move() {
    System.out.println("자동차 출발");
  }
}

class Container<T extends Movable> {
  private T item;

  // Container 클래스는 Movable 인터페이스를 구현하는 클래스만 허용
  public Container(T item) {
    this.item = item;
  }

  public void makeItMove() {
    item.move();
  }
}

public class GenericExample {
  public static void main(String[] args) {
    // Box<String> stringBox =  new Box<>();
    // stringBox.setItem("Hello");
    // String value1 = stringBox.getItem();
    // System.out.println(value1);

    Box<Integer> integerBox = new Box<>();
    integerBox.setItem(3);
    Integer value2 = integerBox.getItem();
    System.out.println(value2);

    Box<Double> doubleBox = new Box<>();
    doubleBox.setItem(3.4);
    Double value3 = doubleBox.getItem();
    System.out.println(value3);

    Container<Car> carContainer = new Container<>(new Car());
    carContainer.makeItMove();
  }
}
