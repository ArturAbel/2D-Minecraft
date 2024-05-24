import {
  chest,
  blockContainer,
  grassBlock,
  soilBlock,
  stoneBlock,
  woodBlock,
  goldBlock,
  silverBlock,
} from "./domElements.js";

export class ChestModule {
  constructor() {
    this.chest = chest;
    this.blockContainer = blockContainer;
    this.grassBlock = grassBlock;
    this.soilBlock = soilBlock;
    this.stoneBlock = stoneBlock;
    this.woodBlock = woodBlock;
    this.goldBlock = goldBlock;
    this.silverBlock = silverBlock;
  }
}
