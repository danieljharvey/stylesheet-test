import { removeSelectorText } from "./find-item";

describe("removeSelectorText", () => {
  it("Finds and removes", () => {
    const fullString =
      ".App-header { background-color: rgb(40, 44, 52); min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: calc(10px + 2vmin); color: white; }";
    const expected =
      "{ background-color: rgb(40, 44, 52); min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: calc(10px + 2vmin); color: white; }";
    expect(removeSelectorText(".App-header", fullString)).toEqual(expected);
  });
  it("Doesn't need to remove", () => {
    const expected =
      "{ background-color: rgb(40, 44, 52); min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: calc(10px + 2vmin); color: white; }";
    expect(removeSelectorText(".App-header", expected)).toEqual(expected);
  });
});
