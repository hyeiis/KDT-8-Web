package Loop;

import java.util.Scanner;

public class Loop_Practice {
    public static void main(String[] args) {
        System.out.println("숫자를 입력하세요");

        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        for (int i=1; i<=num; i++)
            System.out.print(i+ " ");
    }
}
