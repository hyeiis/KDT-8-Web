package inheritance.Practice;

public class Motorcycle extends Vehicle {
  private int maxPeople;

  public Motorcycle(String model, int wheelCnt, int maxPeople) {
    super(model, wheelCnt);
    this.maxPeople = maxPeople;
  }

  @Override
  public String toString() {
    return super.toString() + " 최대 인원: " + maxPeople;
  }
}
