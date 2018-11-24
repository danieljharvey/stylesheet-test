export const addSelectorText = (selectorText, cssText) => {
  return `.${selectorText} { ${cssText} }`;
};

export const addItem = (state, cssClassName, content) => ({
  ...state,
  [cssClassName]: content
});

export const calcDiffs = (oldState, newState) =>
  Object.keys(newState).reduce((all, newIndex) => {
    const newItem = newState[newIndex];
    const oldItem = oldState[newIndex];
    return newItem !== oldItem ? [...all, newIndex] : all;
  }, []);
