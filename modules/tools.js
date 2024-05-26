
import { tools, axe, pickaxe, shovel, spyglass, gameGrid,spyglassElement } from './elements.js';
import { SWORD_CURSOR, AXE_CURSOR, PICKAXE_CURSOR, SHOVEL_CURSOR, SHOVEL, AXE, PICKAXE, SPYGLASS} from "./constants.js";

export class ToolsModule {

  currentTool = 'none';


  constructor() {
    this.tools = tools;
    this.axe = axe;
    this.pickaxe = pickaxe;
    this.shovel = shovel;
    this.spyglass = spyglass;
    this.gameGrid = gameGrid;
    this.spyglassElement = spyglassElement;
    this.useTool();
    this.checkTool();
  }

  checkTool(){
    return this.currentTool;
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
    this.gameGrid.style.cursor = AXE_CURSOR;
    this.currentTool = AXE;
  }


  takePickaxe() {
    this.removeSelectedTool()
    this.pickaxe.parentElement.classList.add("selected-tool");
    this.gameGrid.style.cursor = PICKAXE_CURSOR;
    this.currentTool = PICKAXE;
  }


  takeShovel() {
    this.removeSelectedTool()
    this.shovel.parentElement.classList.add("selected-tool");
    this.gameGrid.style.cursor = SHOVEL_CURSOR;
    this.currentTool = SHOVEL;
  }


  takeSpyglass() {
    this.removeSelectedTool()
    this.spyglass.parentElement.classList.add("selected-tool");
    this.spyglassElement.classList.remove('hidden');
    this.currentTool = SPYGLASS;
  }


  removeSelectedTool(){
    this.tools.forEach(tool => {
      tool.classList.remove("selected-tool"); 
      this.gameGrid.style.cursor = SWORD_CURSOR;
      this.spyglassElement.classList.add('hidden');
      this.currentTool = 'none';
    });
  }
}
