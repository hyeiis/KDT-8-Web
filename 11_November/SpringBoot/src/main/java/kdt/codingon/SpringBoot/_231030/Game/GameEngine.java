package kdt.codingon.SpringBoot._231030.Game;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class GameEngine {
  private GameConsole game;
  // 앞에 @Qualifier("LoLQualifier")를 붙이면 LoL에서만 가져오겠다는 것
  public GameEngine(@Qualifier("LoLQualifier") GameConsole game) {
    this.game = game;
  }
  public void run() {
    game.up();
    game.down();
    game.left();
    game.right();
  }
}
