import { GameModule } from "./game.Module.js";


export class IntroModule{
   constructor(){
      this.introContainer = document.querySelector('.intro-container');
      this.introTitle = document.querySelector('.intro-title');
      this.startButton = document.querySelector('.start-button');
      this.resetButton = document.querySelector('#reset-button');
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