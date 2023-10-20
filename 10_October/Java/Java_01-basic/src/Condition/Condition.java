package Condition;

import java.util.Scanner;

public class Condition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("숫자를 입력하세요");

        int num = scanner.nextInt();
        /* if문 */
        if (num % 3 == 0) System.out.println("3의 배수입니다.");
        else System.out.println("3의 배수가 아닙니다.");

        /* switch문 */
        switch (num % 3) {
            case 0:
                System.out.println("3의 배수입니다.");
                break;
            default:
                System.out.println("3의 배수가 아닙니다.");
        }

        /* 문자열 비교
         자바에서 문자열은 String 자료형(reference 자료형)이므로, 변수로 접근할 수 있는 값은 문자열이 저장된 메모리 주소 값.
         따라서, == 연사자로 비교 불가. 변수.equals("문자열") 형태로 비교해야 함
         */

        System.out.println("이름을 입력하세요");
        String name = scanner.next();

        if (name.equals("코딩온"))
            System.out.println("코딩온님 환영합니다");
        else
            System.out.printf("%s님 환영합니다", name);

        scanner.close();
    }
}
