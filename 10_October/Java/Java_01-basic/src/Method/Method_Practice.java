package Method;

import java.util.Scanner;

public class Method_Practice {
    public double add (int a, int b) {
        return a + b;
    }
    public double sub (int a, int b) {
        return a - b;
    }
    public double mul (int a, int b) {
        return a * b;
    }
    public double div (int a, int b) {
        return (double) a / b;
    }

    public static void main(String[] args) {
        System.out.println("숫자 두 개를 입력하세요");
        Scanner scanner = new Scanner(System.in);
        Method_Practice  calc = new Method_Practice();

        int a = scanner.nextInt();
        int b = scanner.nextInt();

        System.out.printf("덧셈 결과: %.1f", calc.add(a,b)).println();
        System.out.printf("뺄셈 결과: %.1f", calc.sub(a,b)).println();
        System.out.printf("곱셈 결과: %.1f", calc.mul(a,b)).println();
        System.out.printf("나눗셈 결과: %f", calc.div(a,b));
    }
}
