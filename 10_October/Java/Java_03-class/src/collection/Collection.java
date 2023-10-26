package collection;

import java.util.*;

public class Collection {
  public static void main(String[] args) {
    // LinkedList
    List<String> linkedList = new LinkedList<>();
    linkedList.add("A");
    linkedList.add("B");
    linkedList.add(1, "C");
    System.out.println(linkedList);

    // HashSet
    Set<String> hashSet = new HashSet<>();
    hashSet.add("A");
    hashSet.add("A");
    hashSet.add("B");
    hashSet.add("C");
    System.out.println(hashSet);

    // LinkedHashSet
    Set<String> linkedHashSet = new LinkedHashSet<>();
    linkedHashSet.add("C");
    linkedHashSet.add("B");
    linkedHashSet.add("A");
    linkedHashSet.add("A");
    System.out.println(linkedHashSet);

    // TreeSet
    Set<String> treeSet = new TreeSet<>();
    treeSet.add("B");
    treeSet.add("C");
    treeSet.add("A");
    System.out.println(treeSet);

    // HashMap
    Map<String, Integer> hashMap = new HashMap<>();
    hashMap.put("one", 1);
    hashMap.put("two", 2);
    hashMap.put("three", 3);
    System.out.println(hashMap);

    // LinkedHashMap
    Map<String, Integer> list = new LinkedHashMap<>();
    list.put("three", 3);
    list.put("one", 1);
    list.put("two", 2);
    System.out.println(list);

    // TreeMap
    Map<String, Integer> treeMap = new TreeMap<>();
    treeMap.put("C", 3);
    treeMap.put("A", 1);
    treeMap.put("B", 2);
    System.out.println(treeMap);


  }
}
