package interface_;

interface Playble {
  void play();
  void pause();
  void stop();
}

class MP3Player implements Playble{

  @Override
  public void play() {
    System.out.println("MP3 Player play");
  }

  @Override
  public void pause() {
    System.out.println("MP3 Player pause");
  }

  @Override
  public void stop() {
    System.out.println("MP3 Player stop");
  }
}

class DVDPlayer implements Playble{

  @Override
  public void play() {
    System.out.println("DVD Player play");
  }

  @Override
  public void pause() {
    System.out.println("DVD Player pause");
  }

  @Override
  public void stop() {
    System.out.println("DVD Player stop");
  }
}

public class Interface_Practice {
  public static void main(String[] args) {
    MP3Player mp3 = new MP3Player();
    DVDPlayer dvd = new DVDPlayer();

    mp3.play();
    mp3.pause();
    mp3.stop();
    dvd.play();
    dvd.pause();
    dvd.stop();
  }
}
