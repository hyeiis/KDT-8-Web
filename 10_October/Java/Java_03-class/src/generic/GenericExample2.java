package generic;

import java.util.ArrayList;

public class GenericExample2 {
  public static void main(String[] args) {
    GenericExample2 example2 = new GenericExample2();
    ArrayList<Integer> integers = new ArrayList<>();
    integers.add(1);
    integers.add(2);
    integers.add(3);

    ArrayList<Double> doubles = new ArrayList<>();
    doubles.add(1.1);
    doubles.add(2.2);
    doubles.add(3.3);

    // 타입 파라미터를 사용하여 리스트에 아이템 추가
    example2.addToNumberList(integers, 4);
    example2.addToNumberList(doubles, 4.4);

    // 와일드카드를 사용하여 리스트 내용 출력
    example2.processList(integers);
    example2.processList(doubles);

    ArrayList<Number> numbers = new ArrayList<>();
    example2.addNumber(numbers);
    System.out.println(numbers);
  }

  // 와일드 카드
  public void processList(ArrayList<? extends Number> list) {
    for (Number num : list) {
      System.out.println(num);
    }
    // 불가능
    // list.add(1);
  }

  // 타입 파라미터
  public <T extends Number> void addToNumberList(ArrayList<T> list, T item) {
    list.add(item);
  }

  // ? super T
  public void addNumber(ArrayList<? super Integer> list) {
    for (int i = 1; i <= 5; i++) {
      list.add(i);
    }
  }
}
