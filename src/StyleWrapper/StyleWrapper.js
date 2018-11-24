import React from "react";
import { sheet } from "../App";

// this is a very crap version of an SC wrapper using context

// ComponentToWrap = react component of some kind
// styleFunc is a function that takes props and returns a string of CSS
// again - this is far too low level and misses out all the nice template string stuff
// but is hopefully at least a workable example

export const styleWrapper = (ComponentToWrap, styleFunc) => {
  class Nice extends React.Component {
    constructor(props) {
      super(props);
      // generate definitely-unique-classname
      // could use a shared iterating index value in the StyleContext to make sure these are actually unique IRL
      const cssClassName = "horse" + sheet.getNextId();
      this.state = {
        cssClassName,
        calculatedStyle: ""
      };
    }
    updateStyles(addStyle) {
      const calculatedStyle = styleFunc(this.props);
      if (calculatedStyle === this.state.calculatedStyle) {
        return;
      }
      this.setState(state => ({
        ...state,
        calculatedStyle
      }));
      addStyle(this.state.cssClassName, calculatedStyle);
    }
    componentDidMount() {
      this.updateStyles(sheet.addStyle);
    }
    componentDidUpdate() {
      this.updateStyles(sheet.addStyle);
    }
    render() {
      return (
        <ComponentToWrap className={this.state.cssClassName} {...this.props}>
          {this.props.children}
        </ComponentToWrap>
      );
    }
  }
  return Nice;
};
