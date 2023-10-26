package collection;

import java.util.HashSet;
import java.util.Scanner;

public class Collection_Practice1 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    HashSet<Integer> numList= new HashSet<>();

    while (true) {
      System.out.println("정수를 입력하세요. -1을 누르면 종료됩니다");
      int n = scanner.nextInt();
      if(n == -1) break;
      numList.add(n);
    }
    System.out.println(numList);
  }
}
