package Method;

import java.util.Scanner;

public class Method {
    /* JavaScript
    function func(a, b, c=0, ...rest) {}
    func(1,2)
     */

    // 메소드 오버 로딩
    // 정수 두 개 더하는 메소드
    public int add(int a, int b) {
        return a + b;
    }
    // 실수 두 개 더하는 메소드
    public double add (double a, double b) {
        return a + b;
    }
    // 정수 세 개 더하는 메소드
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    public static void main(String[] args) {
        Method method = new Method();
        System.out.print("정수 2개 더하기: ");
        System.out.println(method.add(1, 4));

        System.out.print("실수 2개 더하기: ");
        System.out.println(method.add(1.4, 3.5));

        System.out.print("실수 2개 더하기: ");
        System.out.println(method.add(2, 3, 6));
    }
}
