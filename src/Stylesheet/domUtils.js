import { addSelectorText } from "./funcUtils";

const findStylesheetById = (_document, id) => {
  const foundId = Object.keys(_document.styleSheets).find(i => {
    const sheet = _document.styleSheets[i];
    return sheet && sheet.ownerNode && sheet.ownerNode.id === id;
  });
  if (foundId) {
    return _document.styleSheets[foundId];
  }
};

const getStylesheetRules = stylesheet => {
  if (!stylesheet) {
    return [];
  }
  const rules = stylesheet.rules || stylesheet.cssRules || {};

  return Object.keys(rules).map(j => {
    return rules[j];
  });
};

export function putStyle(stylesheet, className_, text) {
  const newIndex = findStyle(stylesheet, className_);
  if (newIndex > -1) {
    deleteRule(stylesheet, newIndex);
  }
  insertRule(stylesheet, className_, text);
}

const deleteRule = (stylesheet, newIndex) => {
  if (stylesheet) {
    stylesheet.deleteRule(newIndex);
  }
};

const insertRule = (stylesheet, className_, text) => {
  if (stylesheet) {
    stylesheet.insertRule(addSelectorText(className_, text));
  }
};

function findStyle(stylesheet, className_) {
  return getStylesheetRules(stylesheet).reduce((all, item, index) => {
    if (item.selectorText === `.${className_}`) {
      return index;
    }
    return all;
  }, -1);
}

export const createStyleTag = id => {
  const css = "";
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");

  style.type = "text/css";
  style.id = id;
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
  return findStylesheetById(document, id);
};
