package Method;

public class Method_Practice2 {
    public double width(int a) {
        return Math.PI * a * a;
    }
    public double width(int a, int b) {
        return a * b;
    }

    public double width_tri(int a, int b ){
        return (double) (a * b) / 2;
    }

    public static void main(String[] args) {
        Method_Practice2 calc = new Method_Practice2();
        System.out.printf("반지름이 5인 원의 넓이: %f", calc.width(5)).println();
        System.out.printf("가로 4, 세로 7인 직사각형의 넓이: %.1f", calc.width(4, 7)).println();
        System.out.printf("밑변 6, 높이 3인 삼격형의 넓이: %.1f", calc.width_tri(6, 3)).println();
    }
}
