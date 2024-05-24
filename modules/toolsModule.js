
import { tools, axe, pickaxe, shovel, spyglass, gameGrid } from './domElements.js';


export class ToolsModule {


  constructor() {
    this.tools = tools;
    this.axe = axe;
    this.pickaxe = pickaxe;
    this.shovel = shovel;
    this.spyglass = spyglass;
    this.gameContainer = gameGrid;
    this.useTool();
  }




  useTool() {
    this.axe.addEventListener("click", () => this.takeAxe());
    this.pickaxe.addEventListener("click", () => this.takePickaxe());
    this.shovel.addEventListener("click", () => this.takeShovel());
    this.spyglass.addEventListener("click", () => this.takeSpyglass());
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.removeSelectedTool();
    });

  }

  takeAxe() {
    this.removeSelectedTool()
    this.axe.parentElement.classList.add("selected-tool");
    this.gameContainer.style.cursor = "url(/assets/cursor/axe.cur) 0 0, pointer";
  }
  takePickaxe() {
    this.removeSelectedTool()
    this.pickaxe.parentElement.classList.add("selected-tool");
    this.gameContainer.style.cursor = "url(/assets/cursor/pickaxe.cur) 0 0, pointer";
  }

  takeShovel() {
    this.removeSelectedTool()
    this.shovel.parentElement.classList.add("selected-tool");
    this.gameContainer.style.cursor = "url(/assets/cursor/shovel.cur) 0 0, pointer";
  }

  takeSpyglass() {
    this.removeSelectedTool()
    this.spyglass.parentElement.classList.add("selected-tool");
  }

  removeSelectedTool(){
    this.tools.forEach(tool => {
      tool.classList.remove("selected-tool"); 
      this.gameContainer.style.cursor = "url(/assets/cursor/cursor.cur) 0 0, pointer";
    });
  }
}
