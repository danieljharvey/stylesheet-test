import React, { Component } from "react";
import "./App.css";
import { StyleProvider, StyleContext } from "./Stylesheet";

// here is basic usage of the addStyle function to change the stylesheet
// i am not really advocating low-level usage like this in user-land
// ideally this would be abstracted away by library code
class App extends Component {
  render() {
    return (
      <StyleProvider>
        <div className="App">
          <header className="App-header">
            <p className="label-face">I am boring text</p>
            <StyleContext.Consumer>
              {({ addStyle }) => (
                <button
                  onClick={() =>
                    addStyle("label-face", "color:green; font-size: 100px;")
                  }
                >
                  Click me to change the stylesheet
                </button>
              )}
            </StyleContext.Consumer>
          </header>
        </div>
      </StyleProvider>
    );
  }
}

export default App;
