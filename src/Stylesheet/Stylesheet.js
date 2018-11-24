import { putStyle } from "./domUtils";
import { addItem, calcDiffs } from "./funcUtils";
export { createStyleTag } from "./domUtils";

export class SheetFace {
  constructor(_stylesheet) {
    this.stylesheet = _stylesheet;
  }
  styles = {};
  currentId = 0;

  addStyle = (cssClassName, content) => {
    const newState = addItem(this.styles, cssClassName, content);
    const diffs = calcDiffs(this.styles, newState);
    diffs.forEach(diff => {
      putStyle(this.stylesheet, diff, newState[diff]);
    });
    this.styles = newState;
  };

  getNextId = () => {
    this.currentId++;
    return this.currentId;
  };
}
