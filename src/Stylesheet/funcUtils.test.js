import { addSelectorText, addItem, calcDiffs } from "./funcUtils";

describe("addSelectorText", () => {
  it("Does something vaguely sensible", () => {
    expect(addSelectorText("plop", "color: red;")).toEqual(
      ".plop { color: red; }"
    );
  });
});

describe("addItem", () => {
  it("New item", () => {
    const state = {
      yes: "great"
    };
    expect(addItem(state, "no", "excellent")).toEqual({
      yes: "great",
      no: "excellent"
    });
  });

  it("Replace item", () => {
    const state = {
      yes: "great"
    };
    expect(addItem(state, "yes", "excellent")).toEqual({
      yes: "excellent"
    });
  });
});

describe("calcDiffs", () => {
  it("new item", () => {
    const oldState = {
      yes: "great"
    };
    const newState = {
      yes: "great",
      no: "excellent"
    };
    expect(calcDiffs(oldState, newState)).toEqual(["no"]);
  });

  it("same item", () => {
    const oldState = {
      yes: "great"
    };
    const newState = {
      yes: "great"
    };
    expect(calcDiffs(oldState, newState)).toEqual([]);
  });

  it("changed item", () => {
    const oldState = {
      yes: "great"
    };
    const newState = {
      yes: "goo"
    };
    expect(calcDiffs(oldState, newState)).toEqual(["yes"]);
  });
});
