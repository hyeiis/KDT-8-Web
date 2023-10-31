package kdt.codingon.SpringBoot._231030.Game;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("kdt.codingon.SpringBoot._231030.Game")
public class GameMain {
  public static void main(String[] args) {
    // 결합: 무엇인가를 변경하는 데 얼마나 많은 작업이 관련되어 있는지에 대한 측정
    // Diablo game = new Diablo();
    // LoL game = new LoL();
    // GameEngine engine = new GameEngine(game);
    // engine.run();

    var context = new AnnotationConfigApplicationContext(GameMain.class);
    context.getBean(GameConsole.class).down();
    context.getBean(GameEngine.class).run();
  }
}
