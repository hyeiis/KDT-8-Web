package practice;

import java.util.ArrayList;
import java.util.Scanner;

public class Rectangle {
  private int width, height;

  public Rectangle(int width) {
    this.width = width;
    this.height = getHeight();
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    ArrayList<Rectangle> rectArray = new ArrayList<>();

    while (true) {
      System.out.println("사각형의 가로와 세로 길이를 공백 기준으로 입력해주세요");
      int width = scanner.nextInt();
      int height = scanner.nextInt();

      if (width == 0 && height == 0) break;

      Rectangle rect = new Rectangle(width);
      rect.setHeight(height);
      rectArray.add(rect);
    }

    for (Rectangle rect : rectArray) {
      System.out.println("가로 길이는 " + rect.getWidth());
      System.out.println("세로 길이는 " + rect.getHeight());
      System.out.println("넓이는 " + rect.area());
      System.out.println("------------------------");
    }
  }

  public int getWidth() {
    return this.width;
  }

  public void setWidth(int width) {
    this.width = width;
  }

  public int getHeight() {
    return this.height;
  }

  public void setHeight(int height) {
    this.height = height;
  }

  int area() {
    return width * height;
  }

}