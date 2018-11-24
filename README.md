# Style Tests

A POC of making a styled-components-a-like using React Context and a shared Stylesheet rendered with React DOM. The aim with an approach like this is to reduce the amount of messing around with actual DOM elements (to the correct number, which is zero, never, zilch, what's the DOM? etc)

This provides a app-level `<StyleProvider>` wrapper which provides a context for all elements to write stylesheet changes to, and a `styleWrapper` function that takes a component and a mapping of it's props to some CSS.

Here is a very basic element that allows you to change it's CSS color prop by passing a `color` prop.

```javascript
const basicElement = props => <h1 {...props}>{props.children}</h1>;

export const Buttonino = styleWrapper(
  basicElement,
  props => `color: ${props.color};`
);
```

You can then use it like `<Buttonino color="red">Red, yeah</Buttonino>` or even `<Buttonino color="rgb(0,255,128)">Greeny-blue-probably</Buttonino>` because this is all so low-level and hacky that there's nothing stopping you.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
