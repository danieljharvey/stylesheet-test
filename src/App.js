import React, { Component } from "react";
import "./App.css";
import { SheetFace, createStyleTag } from "./Stylesheet/Stylesheet";
import { Buttonino } from "./Buttonino";

// here is basic usage of the addStyle function to change the stylesheet
// i am not really advocating low-level usage like this in user-land
// ideally this would be abstracted away by library code like in ./StyleWrapper

const newColours = colours => {
  const [first, ...rest] = colours;
  return [...rest, first];
};

export const sheet = new SheetFace(createStyleTag("total-styles"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { colours: ["blue", "red", "green", "pink"] };
    this.cycleColours = () => {
      this.setState(st => ({ ...st, colours: newColours(st.colours) }));
    };
  }
  render() {
    const colours = this.state.colours;
    return (
      <div className="App">
        <header className="App-header">
          <p className="label-face">I am boring text</p>
          <button
            onClick={() =>
              sheet.addStyle("label-face", "color:green; font-size: 100px;")
            }
          >
            Click me to change the stylesheet directly like some sort of hacker
          </button>
          <button onClick={() => this.cycleColours()}>
            Cycle those colourful words please
          </button>
          <React.Fragment>
            {colours.map((colour, i) => (
              <Buttonino key={i} color={colour}>
                {colour}
              </Buttonino>
            ))}
          </React.Fragment>
        </header>
      </div>
    );
  }
}

export default App;
