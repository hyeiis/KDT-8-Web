package kdt.codingon.SpringBoot._231030.Game;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("LoLQualifier")
public class LoL implements GameConsole{
  public void up() { System.out.println("LoL UP");}
  public void down() { System.out.println("DOWN");}
  public void left() { System.out.println("LEFT");}
  public void right() { System.out.println("RIGHT");}
}