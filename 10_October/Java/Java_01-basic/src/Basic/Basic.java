package Basic;

import java.math.BigDecimal;

public class Basic {
    public static void main(String[] args) {
        BigDecimal a = new BigDecimal("0.2");
        BigDecimal b = new BigDecimal("0.5");

        BigDecimal sum = a.add(b);
        BigDecimal sub = a.subtract(b);
        BigDecimal mul = a.multiply(b);
        BigDecimal div = a.divide(b);

        System.out.println("덧셈: " + sum); // 덧셈
        System.out.println("뺄셈: " + sub); // 뺼셈
        System.out.println("곱셈: " + mul); // 곱셈
        System.out.println("나눗셈: " + div); // 나눗셈

        /* 형식 지정자
        * %d: 정수
        * %f: 실수 (%.2f → 소수점 둘째 자리)
        * %c: 문자 하나
        * %s: 문자열
        * %b: 논리값(boolean) → true / false
        */
        System.out.println("안녕하세요");
        System.out.printf("%d * %d = %d", 10, 2, 10*2);

    }
}
