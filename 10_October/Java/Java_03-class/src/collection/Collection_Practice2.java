package collection;

import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Collection_Practice2 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Map<String, Integer> user = new TreeMap<>();

    while(true) {
      System.out.println("사용자의 이름과 나이를 띄어쓰기로 구분하여 입력하세요");
      String name = scanner.next();
      if(name.equals("종료")) break;
      int age = scanner.nextInt();
      user.put(name, age);
    }
    System.out.println(user);
  }
}
