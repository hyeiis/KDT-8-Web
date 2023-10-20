package Basic;

import java.util.Scanner;

public class Basic_Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("이름을 입력하세요");
        String name = scanner.next();

        System.out.println("나이를 입력하세요");
        int age = scanner.nextInt();

        System.out.printf("안녕하세요! %s님 (%d 세)", name, age);
        scanner.close();
    }
}
