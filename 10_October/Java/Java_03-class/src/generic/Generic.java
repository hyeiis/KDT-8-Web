package generic;

import java.util.ArrayList;

// 일반 클래스
class MyCustomList {
  ArrayList<String> list = new ArrayList<>();

  public void addElement(String element) {
    list.add(element);
  }

  public void removeElement(String element) {
    list.remove(element);
  }
}

// 제네릭 클래스
class MyCustomListGeneric<T> {
  ArrayList<T> list = new ArrayList<>();

  public void addElement(T element) {
    list.add(element);
  }

  public void removeElement(T element) {

    list.remove(element);
  }
  public T get(int index) {
    return list.get(index);
  }
}

public class Generic {
  public static void main(String[] args) {
    MyCustomList myCustomList = new MyCustomList();
    myCustomList.addElement("하이");
    myCustomList.removeElement("헬로");

    MyCustomListGeneric<String> generic1 = new MyCustomListGeneric<>();
    generic1.addElement("하이");
    generic1.addElement("헬로");
    generic1.addElement("안녕");

    MyCustomListGeneric<Integer> generic2 = new MyCustomListGeneric<>();
    generic2.addElement(1);
    generic2.addElement(2);
    generic2.addElement(3);

    System.out.println(generic1.get(0));
    System.out.println(generic2.get(1));
  }
}