import { GameModule } from "./gameModule.js";
import{ introContainer, introTitle, startButton, resetButton} from "./domElements.js";

export class IntroModule{
   constructor(){
      this.introContainer = introContainer;
      this.introTitle = introTitle;
      this.startButton = startButton;
      this.resetButton = resetButton;
   }
   init(){
      this.startButton.addEventListener('click', () => this.startGame());
   }

   startGame(){
      this.hideIntroContainer();
      this.game = new GameModule();
      this.game.gameInit();
      this.resetButton.addEventListener('click',() => this.game.gameInit());
   }

   hideIntroContainer(){
      this.introContainer.classList.add('hidden');
   }
}