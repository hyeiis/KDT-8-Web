package inheritance.Practice;

public class Dog extends Animal{
  public Dog ( String name, int age) {
    super("강아지", name, age);
  }

  @Override
  public void makeSound() {
    System.out.println("종: " + super.getSpecies() + " / 이름: " + super.getName() + " / 나이: " + super.getAge() + " 멍멍");
  }
}
