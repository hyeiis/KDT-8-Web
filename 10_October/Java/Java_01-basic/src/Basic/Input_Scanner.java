package Basic;

import java.util.Scanner;

public class Input_Scanner {
    public static void main(String[] args) {
        System.out.println("이름, 나이, 키, 결혼 여부를 빈칸으로 분리하여 입력하세요");
        // System.in: 표준 입력 스트림을 나타내며, 주로 키보드 입력 위해 사용
        Scanner scanner = new Scanner(System.in);

        String name = scanner.next(); // 공백 이전까지의 문자열 읽기
        int age = scanner.nextInt();
        double height = scanner.nextDouble();
        boolean isMarried = scanner.nextBoolean(); // 논리값

        System.out.printf("%s님의 나이: %d 세, 키: %.1fcm 결혼 여부: %b", name, age, height, isMarried);
        scanner.close();
    }
}
