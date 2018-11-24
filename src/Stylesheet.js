import React from "react";
import ReactDOM from "react-dom";

// this is the most basic version of this which depends on the styles already being stringified
// in the format { className: content}
//
export const StyleContext = React.createContext({
  styles: {},
  addStyle: () => {}
});

// this wrapper stores all the styles and provides a StyleContext
// which can be used by other component that wish to add or change styles
export class StyleProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addStyle = (cssClassName, content) => {
      this.setState(state => ({
        ...state,
        [cssClassName]: content
      }));
    };
  }
  render() {
    const context = {
      styles: this.state,
      addStyle: this.addStyle
    };
    return (
      <StyleContext.Provider value={context}>
        <React.Fragment>
          <Stylesheet />
          {this.props.children}
        </React.Fragment>
      </StyleContext.Provider>
    );
  }
}

const renderStyle = (cssClassName, content) =>
  `.${cssClassName} { ${content} } `;

// render all styles into one big string
const renderStyles = styles => {
  return Object.keys(styles)
    .map(cssClassName => {
      const content = styles[cssClassName];
      return renderStyle(cssClassName, content);
    })
    .join();
};

// this creates a style element from the state in the StyleProvider
// and plops it in the document's <head> element
export const Stylesheet = () => {
  const content = (
    <style type={"text/css"}>
      <StyleContext.Consumer>
        {({ styles }) => renderStyles(styles)}
      </StyleContext.Consumer>
    </style>
  );
  const domNode = document.head;
  return ReactDOM.createPortal(content, domNode);
};
