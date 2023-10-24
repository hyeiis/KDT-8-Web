package inheritance.Practice;

public class Cat extends Animal{
  public Cat (String name, int age) {
    super("고양이", name, age);
  }

  @Override
  public void makeSound() {
    System.out.println("종: " + super.getSpecies() + " / 이름: " + super.getName() + " / 나이: " + super.getAge() + " 야옹");
  }
}
