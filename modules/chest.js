import {
  chest,
  blockContainer,
  grassBlock,
  soilBlock,
  stoneBlock,
  woodBlock,
  goldBlock,
  silverBlock,
  blocks,
  gameGrid,
} from "./elements.js";

import { GRASS_CURSOR, STONE_CURSOR, SOIL_CURSOR, WOOD_CURSOR,GOLD_CURSOR, SILVER_CURSOR } from "./constants.js";

export class ChestModule {

  
  selectedBlock = "none";

  constructor() {
    this.chest = chest;
    this.blockContainer = blockContainer;
    this.grassBlock = grassBlock;
    this.soilBlock = soilBlock;
    this.stoneBlock = stoneBlock;
    this.woodBlock = woodBlock;
    this.goldBlock = goldBlock;
    this.silverBlock = silverBlock;
    this.blocks = blocks;
    this.gameGrid = gameGrid;
    this.useChest();
    this.selectBlock();
    this.deSelectBlock();
  }

  checkBlock() {
    return this.selectedBlock;
  }

  useChest() {
    this.chest.addEventListener("click", () => {
      const status = this.checkChestStatus();
      status === false ? this.openChest() : this.closeChest();
    });
  }
  checkChestStatus() {
    if (chest.classList.contains("closed")) {
      return false;
    } else {
      return true;
    }
  }
  openChest() {
    blockContainer.classList.remove("hidden");
    chest.classList.remove("closed");
    chest.classList.add("open");
  }
  closeChest() {
    blockContainer.classList.add("hidden");
    chest.classList.add("closed");
    chest.classList.remove("open");
  }

  selectBlock() {
    this.blocks.forEach((block) =>
      block.addEventListener("click", () => {
        if (block.classList.contains("grass-holder")) {
          this.gameGrid.style.cursor =
          GRASS_CURSOR;
          this.selectedBlock = "grass";
        }
        if (block.classList.contains("soil-holder")) {
          this.gameGrid.style.cursor =
          SOIL_CURSOR;
          this.selectedBlock = "soil";
        }
        if (block.classList.contains("stone-holder")) {
          this.gameGrid.style.cursor =
          STONE_CURSOR;
          this.selectedBlock = "stone";
        }
        if (block.classList.contains("wood-holder")) {
          this.gameGrid.style.cursor =
          WOOD_CURSOR;
          this.selectedBlock = "wood";
        }
        if (block.classList.contains("gold-holder")) {
          this.gameGrid.style.cursor =
          GOLD_CURSOR;
          this.selectedBlock = "gold";
        }
        if (block.classList.contains("silver-holder")) {
          this.gameGrid.style.cursor =
          SILVER_CURSOR;
          this.selectedBlock = "silver";
        }
      })
    );
  }

  deSelectBlock() {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.selectedBlock = "none";
    });
  }
}
