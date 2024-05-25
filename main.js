import { IntroModule } from "./modules/intro.js";
import{ quitButton }from './modules/elements.js'

document.addEventListener("DOMContentLoaded", () => {
  const introModule = new IntroModule();
  introModule.quit();
  introModule.init();
});
