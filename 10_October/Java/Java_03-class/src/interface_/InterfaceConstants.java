package interface_;

interface Constants {
  int MAX_VALUE = 100;
  double PI = 3.14;
}

class ConstantsEx implements Constants {
  void display() {
    System.out.println("Max Value: " + MAX_VALUE);
    System.out.println("PI: " + PI);
  }
}
public class InterfaceConstants {
  public static void main(String[] args) {
    ConstantsEx constantsEx = new ConstantsEx();
    constantsEx.display();
  }
}
