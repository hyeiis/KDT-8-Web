package kdt.codingon.SpringBoot._231030.Game;

import org.springframework.stereotype.Component;

@Component
public class Diablo implements GameConsole{
  public void up() { System.out.println("Diablo UP");}
  public void down() { System.out.println("DOWN");}
  public void left() { System.out.println("LEFT");}
  public void right() { System.out.println("RIGHT");}
}
