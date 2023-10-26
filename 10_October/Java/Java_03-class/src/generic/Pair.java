package generic;

public class Pair <K, V>{
  public K getKey() {
    return key;
  }
  public V getValue() {
    return value;
  }

  private K key;
  private V value;

  public Pair (K key, V value){
    this.key = key;
    this.value = value;
  }
  public static void main(String[] args) {
    Pair<String, Integer> pair = new Pair<>("One", 1);
    System.out.println("Key: " + pair.getKey() + ", Value: " + pair.getValue());

    Pair<Integer, String> pair2 = new Pair<>(2, "Two");
    System.out.println("Key: " + pair2.getKey() + ", Value: " + pair2.getValue());
  }
}
