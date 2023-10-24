package inheritance.Practice;

import java.util.Scanner;

public class Animal {
  private String species = "";
  private String name = "";
  private int age = 0;

  public Animal(String species, String name, int age) {
    this.species = species;
    this.name = name;
    this.age = age;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("고양이의 이름과 나이를 입력하세요");
    String catName = scanner.next();
    int catAge = scanner.nextInt();

    System.out.println("개의 이름과 나이를 입력하세요");
    String dogName = scanner.next();
    int dogAge = scanner.nextInt();

    Cat cat = new Cat(catName, catAge);
    Dog dog = new Dog(dogName, dogAge);

    cat.makeSound();
    dog.makeSound();
  }

  public String getSpecies() {
    return species;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public void makeSound() {
    System.out.println("동물은 소리를 낸다");
  }
}

