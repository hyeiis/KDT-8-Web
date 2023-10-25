package interface_;

public class GameMain {
  public static void main(String[] args) {
    LoL lol = new LoL();
    lol.up();
    lol.down();
    lol.right();
    lol.left();

    Diablo diablo = new Diablo();
    diablo.up();
    diablo.down();
    diablo.right();
    diablo.left();
  }
}
