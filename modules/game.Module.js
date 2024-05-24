import { BOARD_SIZE , IMAGE_COUNT, TREE_CELLS, LEAF_CELLS } from "./constants.js";

export class GameModule {
  constructor() {
    this.BOARD_COLUMNS = BOARD_SIZE[1];
    this.BOARD_ROWS = BOARD_SIZE[0];
    this.gameGrid = document.getElementById("game-grid");
    this.cells = [];
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
        this.addSpecialCellClass(cellObj)
      
      }
    }
    console.log(this.cells);
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



//   Add a special class for each cell
  addSpecialCellClass(cellObj){
      
      if (cellObj.index[1] === 8) {
         cellObj.dom.classList.add('grass');
         const randomNumber = this.randomizeImage();
         cellObj.dom.style.backgroundImage = `url(/assets/images/cells/grass/grass${randomNumber}.png)`;
         cellObj.class = 'grass';
      }

      if (cellObj.index[1] > 8) {
         cellObj.dom.classList.add('soil');
         const randomNumber = this.randomizeImage();
         cellObj.dom.style.backgroundImage = `url(/assets/images/cells/soil/soil${randomNumber}.png)`;
         cellObj.class = 'soil';
      }

      if (cellObj.index[1] < 8) {
         cellObj.dom.classList.add('sky');
         cellObj.class = 'sky';
      }

      if (cellObj.index[1] < 2) {
         const randomNumber = this.randomizeImage();
         if (randomNumber >= 3) {
            cellObj.dom.classList.add('cloud');
            cellObj.class = 'cloud';
         }
      }
      
      TREE_CELLS.forEach(index => {
         const rows = index[0];
         const columns = index[1];
         if (cellObj.index[0] === columns && cellObj.index[1] === rows) {
            cellObj.dom.classList.remove('sky');
            cellObj.dom.classList.add('wood');
            cellObj.class = 'wood';
         }
      });
      LEAF_CELLS.forEach(index => {
         const rows = index[0];
         const columns = index[1];
         if (cellObj.index[0] === rows && cellObj.index[1] === columns) {
            cellObj.dom.classList.remove('sky');
            cellObj.dom.classList.add('leaves');
            cellObj.class = 'leaves';
         }
      });
  }


  
//   Randomizes the images out of 5 different images
  randomizeImage(){
   const randomNumber = Math.floor(Math.random() * IMAGE_COUNT) + 1;
   return randomNumber;
  }

}
