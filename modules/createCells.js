import { TREE_CELLS, LEAF_CELLS, IMAGE_COUNT } from "./constants.js";




export function addSpecialCellClass(cellObj) {
 
   if (cellObj.index[1] === 8) {
    cellObj.dom.classList.add("grass");
    const randomNumber = randomizeImage();
    cellObj.dom.style.backgroundImage = `url(/assets/images/cells/grass/grass${randomNumber}.png)`;
    cellObj.class = "grass";
  }

  if (cellObj.index[1] > 8) {
    cellObj.dom.classList.add("soil");
    const randomNumber = randomizeImage();
    cellObj.dom.style.backgroundImage = `url(/assets/images/cells/soil/soil${randomNumber}.png)`;
    cellObj.class = "soil";
  }

  if (cellObj.index[1] < 8) {
    cellObj.dom.classList.add("sky");
    cellObj.class = "sky";
  }

  if (cellObj.index[1] < 2) {
    const randomNumber = randomizeImage();
    if (randomNumber >= 3) {
      cellObj.dom.classList.add("cloud");
      cellObj.class = "cloud";
    }
  }

  TREE_CELLS.forEach((index) => {
    const rows = index[0];
    const columns = index[1];
    if (cellObj.index[0] === columns && cellObj.index[1] === rows) {
      cellObj.dom.classList.remove("sky");
      cellObj.dom.classList.add("wood");
      cellObj.class = "wood";
    }
  });

  LEAF_CELLS.forEach((index) => {
    const rows = index[0];
    const columns = index[1];
    if (cellObj.index[0] === rows && cellObj.index[1] === columns) {
      cellObj.dom.classList.remove("sky");
      cellObj.dom.classList.add("leaves");
      cellObj.class = "leaves";
    }
  });
}

function randomizeImage() {
  return Math.floor(Math.random() * IMAGE_COUNT) + 1;
}
