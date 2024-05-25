import { GameModule } from "./game.js";
import {
  introContainer,
  introTitle,
  startButton,
  resetButton,
  quitButton,
} from "./elements.js";

export class IntroModule {
  constructor() {
    this.introContainer = introContainer;
    this.introTitle = introTitle;
    this.startButton = startButton;
    this.resetButton = resetButton;
    this.quitButton = quitButton;
  }

  quit(){
    this.quitButton.addEventListener('click', () => alert(`Not yet ready!`));
  }

  init() {
    this.startButton.addEventListener("click", () => this.startGame());
  }



  startGame() {
    this.hideIntroContainer();
    this.game = new GameModule();
    this.game.gameInit();
    this.resetButton.addEventListener("click", () => {
      window.location.reload();
      this.game.gameInit();
    });
  }

  hideIntroContainer() {
    this.introContainer.classList.add("hidden");
  }
}
