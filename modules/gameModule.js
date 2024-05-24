import { ToolsModule } from './toolsModule.js';
import { addSpecialCellClass } from './createCells.js';
import { BOARD_SIZE} from './constants.js';
import { gameGrid } from './domElements.js';


export class GameModule {
  constructor() {
    this.BOARD_COLUMNS = BOARD_SIZE[1];
    this.BOARD_ROWS = BOARD_SIZE[0];
    this.gameGrid = gameGrid;
    this.cells = [];
    this.tool = new ToolsModule;
  }


//   Create game
  gameInit() {
    this.gameGrid.innerHTML = "";

    for (let i = 0; i < this.BOARD_ROWS; i++) {
      const row = document.createElement("div");
      this.gameGrid.appendChild(row);

      for (let j = 0; j < this.BOARD_COLUMNS; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        const cellObj = this.addCellProperties(cell, i, j);
        addSpecialCellClass(cellObj);
      }
    }
  }

  // Create an object of cells with dom element, index and value;
  addCellProperties(cell, i, j) {
    const cellObject = {
      dom: cell,
      index: [i, j],
      value: 0,
    };
    this.cells.push(cellObject);
    return cellObject;
  }




}
