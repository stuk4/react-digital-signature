
# React Digital Signature

A React signature component using  [signature_pad](https://github.com/szimek/signature_pad "signature_pad") and based on other libraries of the same functionality.

## Installation
You can install the latest release using npm:

```bash
npm install --save react-digital-signature
```
or Yarn:

```bash
yarn add react-digital-signature
```
## Usage TS
```tsx
import { useRef } from 'react'
import './App.css'
import DigitalSignature, { SignaturePad } from 'react-digital-signature'

function App() {

  const ref = useRef<SignaturePad>()
  const handleCLear = () =>{
    ref.current?.clear()
  }
  return (
    <div className="App">
      <button onClick={handleCLear}>Clear</button>
        <br />
        <br />
      <DigitalSignature 
        signaturePadRef={ref}
        canvasProps={{
          style:{
            background:"white",
            border:"1px solid black"
          }
        }}
      />
    </div>
  )
}
export default App

```
## Usage JS
```tsx
import { useRef } from 'react'
import './App.css'
import DigitalSignature from 'react-digital-signature'

function App() {

  const ref = useRef()
  const handleCLear = () =>{
    ref.current?.clear()
  }
  return (
    <div className="App">
      <button onClick={handleCLear}>Clear</button>
        <br />
        <br />
      <DigitalSignature 
        signaturePadRef={ref}
        canvasProps={{
          style:{
            background:"white",
            border:"1px solid black"
          }
        }}
      />
    </div>
  )
}
export default App
```
## Props ``` <DigitalSignature />```
| Prop                  | Type             | Default Value      | Description                                                                                                                            |
|-----------------------|------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| velocityFilterWeight  | number           | 0.7               | Controls the weight/impact of velocity on the pen stroke.                                                                             |
| minWidth              | number           | 0.5               | Minimum width of the pen stroke.                                                                                                       |
| maxWidth              | number           | 2.5               | Maximum width of the pen stroke.                                                                                                       |
| minDistance           | number           | 5                 | Minimum distance between two points to be considered as a valid stroke.                                                                 |
| dotSize               | number or function   | () => (min + max)/2 | The size of the dot that is placed at the beginning and end of each stroke.                                                             |
| penColor              | string           | 'black'           | Color of the pen stroke.                                                                                                               |
| throttle              | number           | 16                | The time in milliseconds between each mouse/touchmove event that is considered as a new stroke.                                        |
| onEnd                 | function         |                   | A callback function that is called when a stroke ends.                                                                                  |
| onBegin               | function         |                   | A callback function that is called when a stroke begins.                                                                                |
| canvasProps           | object           |                   | Props that are directly passed to the underlying `<canvas />` element.                                                                   |
| backgroundColor       | string           | "rgba(0,0,0,0)"   | Background color of the canvas element.                                                                                                |
| eraseOnResize         | bool             | true              | Whether or not the canvas should be cleared when the window resizes (Usually used on ios devices and browser with bottom navigation bar variable).                                                                   |

Note: All props, except for canvasProps and eraseOnResize, are passed through to signature_pad as its options. If you want know more of the props of the component you can check the original [docs](https://github.com/szimek/signature_pad/blob/master/README.md#options "docs")

## API


- `refDigitalPad.toDataURL();` Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)

- `refDigitalPad.toDataURL("image/jpeg");` save image as PNG

- `refDigitalPad.toDataURL("image/jpeg", 0.5);` save image as JPEG with 0.5 image quality

- `refDigitalPad.toDataURL("image/svg+xml");` save image as SVG data url

- `refDigitalPad.toSVG();` Return svg string without converting to base64

- `refDigitalPad.toSVG({includeBackgroundColor: true});` add background color to svg output

- `refDigitalPad.fromDataURL("data:image/png;base64,iVBORw0K...");` Draws signature image from data URL (mostly uses https://mdn.io/drawImage under-the-hood)

- `refDigitalPad.fromDataURL("data:image/png;base64,iVBORw0K...", { ratio: 1, width: 400, height: 200, xOffset: 100, yOffset: 50 });` Draws signature image from data URL and alters it with the given options

- `const data = refDigitalPad.toData();` Returns signature image as an array of point groups

- `refDigitalPad.fromData(data);` Draws signature image from an array of point groups

- `refDigitalPad.fromData(data, { clear: false });` Draws signature image from an array of point groups, without clearing your existing image (clear defaults to true if not provided)

- `refDigitalPad.clear();` Clears the canvas 

- `refDigitalPad.isEmpty();` Returns true if canvas is empty, otherwise returns false

- `refDigitalPad.off();` Unbinds all event handlers

- `refDigitalPad.on();` Rebinds all event handlers

You can use the API using a  [useRef()](https://reactjs.org/docs/hooks-reference.html#useref "useRef()") hook for example:
```tsx
function App() {
  const refDigitalPad = useRef()
  const handleCLear = () =>{
    refDigitalPad.current?.clear()
  }
  return (
    <div className="App">
      <button onClick={handleCLear}>Clear</button>
        <br />
        <br />
      <DigitalSignature 
        signaturePadRef={refDigitalPad}
        canvasProps={{
          style:{
            background:"white",
            border:"1px solid black"
          }
        }}
      />
    </div>
  )
}
```
## Example
If you want execute the example of the project:
```bash
cd example && npm install && npm run start
```
and navigate to http://localhost:1234/







