import { getStylesheetRules } from "./domUtils";

export function getStyle(stylesheet, className_) {
  return getStylesheetRules(stylesheet).reduce((yes, classes) => {
    return (
      yes ||
      classes
        .filter(class_ => class_.selectorText === className_)
        .reduce((found, class_) => {
          if (found) {
            return found;
          }
          const ret = class_.cssText || class_.style.cssText;
          if (ret.indexOf(class_.selectorText) === -1) {
            return "{" + ret + "}";
          } else {
            return removeSelectorText(class_.selectorText, ret);
          }
        }, null)
    );
  }, null);
}

export const removeSelectorText = (selectorText, cssText) => {
  const index = cssText.indexOf(selectorText);
  if (index === -1) {
    return cssText;
  }
  return cssText.substr(index + selectorText.length + 1);
};
