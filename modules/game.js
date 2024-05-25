import { ToolsModule } from './tools.js';
import { addSpecialCellClass } from './designGrid.js';
import { BOARD_SIZE, SWORD_CURSOR, SHOVEL, AXE, MAX_MINE, PERCENTAGE, PICKAXE} from './constants.js';
import { gameGrid, grassCounter, woodCounter, soilCounter, stoneCounter, goldCounter, silverCounter} from './elements.js';
import { ChestModule } from "./chest.js";

export class GameModule {
  constructor() {
    this.BOARD_COLUMNS = BOARD_SIZE[1];
    this.BOARD_ROWS = BOARD_SIZE[0];
    this.gameGrid = gameGrid;
    this.cells = [];
    this.tools = new ToolsModule;
    this.chest = new ChestModule;
  }


  mineCraft(){
    this.cells.forEach(cell => {
      cell.dom.addEventListener('click', () => {
        if (this.tools.checkTool() === SHOVEL && cell.dom.classList.contains('grass') && cell.value < MAX_MINE) {

          cell.dom.classList.add('inner');
          grassCounter.textContent++
          cell.value++;
        }
        
        if (this.tools.checkTool() === AXE && cell.dom.classList.contains('wood')) {

          cell.dom.classList.remove('wood');
          cell.dom.classList.add('sky');
          woodCounter.textContent++
        }

        if (this.tools.checkTool() === AXE && cell.dom.classList.contains('leaves')) {

          cell.dom.classList.remove('leaves');
          cell.dom.classList.add('sky');
        }

        if (this.tools.checkTool() === SHOVEL && cell.dom.classList.contains('soil')&& cell.value < MAX_MINE) {

          const cellType = this.randomInnerCell(PERCENTAGE);
          cell.dom.classList.remove('soil');
          cell.dom.classList.add(cellType);
          cell.dom.style.backgroundImage = `url(/assets/images/cells/${cellType}.png)`;
          cell.dom.classList.add('inner');
          soilCounter.textContent++
          cell.value++;
        }

        if (this.tools.checkTool() === PICKAXE && cell.dom.classList.contains('stone')) {

          const cellType = this.randomInnerCell(PERCENTAGE);
          cell.dom.classList.remove('stone');
          cell.dom.classList.add(cellType);
          cell.dom.style.backgroundImage = `url(/assets/images/cells/${cellType}.png)`;
          stoneCounter.textContent++
          cell.value++;
        }
        
        if (this.tools.checkTool() === PICKAXE && cell.dom.classList.contains('gold')&& cell.value < MAX_MINE) {

          const cellType = this.randomInnerCell(PERCENTAGE);
          cell.dom.classList.remove('gold');
          cell.dom.classList.add(cellType);
          cell.dom.style.backgroundImage = `url(/assets/images/cells/${cellType}.png)`;
          goldCounter.textContent++
          cell.value++;
        }

        if (this.tools.checkTool() === PICKAXE && cell.dom.classList.contains('silver')&& cell.value < MAX_MINE) {

          const cellType = this.randomInnerCell(PERCENTAGE);
          cell.dom.classList.remove('silver');
          cell.dom.classList.add(cellType);
          cell.dom.style.backgroundImage = `url(/assets/images/cells/${cellType}.png)`;
          silverCounter.textContent++
          cell.value++;
        }
      });
    });
  }



// Giving random number to select a different cell each time you use the shovel
randomInnerCell(PERCENTAGE){
  let randomCell = '';
  const randomNumber =  Math.floor(Math.random() * PERCENTAGE) + 1; 

  console.log(randomNumber);
  if (randomNumber <= 50) {
    return randomCell = 'soil';
  }
  else if (randomNumber <= 70) {
    return randomCell = 'stone';
  }
  else if (randomNumber <= 85) {
    return randomCell = 'silver';
  }
  else if (randomNumber <= 100 ) {
    return randomCell = 'gold';
  }
}


//   Create game
  gameInit() {

    this.gameGrid.innerHTML = "";
    this.gameGrid.style.cursor = SWORD_CURSOR;

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
    this.mineCraft();
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
