package generic;

// 제네릭 클래스
class Box<T> {
  private T item;

  public void setItem(T item) {
    this.item = item;
  }
  public T getItem() {
    return item;
  }
}

public class GenericExample {
  public static void main(String[] args) {
    Box<String> stringBox =  new Box<>();
    stringBox.setItem("Hello");
    String value1 = stringBox.getItem();
    System.out.println(value1);

    Box<Integer> integerBox =  new Box<>();
    integerBox.setItem(3);
    Integer value2 = integerBox.getItem();
    System.out.println(value2);
  }
}
