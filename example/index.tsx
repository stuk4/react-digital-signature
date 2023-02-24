import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DigitalSignature, { SignaturePad } from '../.';


const App = () => {
    // Example how to use signaturePadRef
    const sigPadRef = React.useRef<SignaturePad>();
    const handleCLear = () =>{
  
      sigPadRef.current?.clear()
    }
  return (
    <div>
      <button
          onClick={handleCLear}
        >Clear</button>
        <br />
        <br />
      <DigitalSignature 
        signaturePadRef={sigPadRef}
        canvasProps={{
          style:{
            border:"1px dashed #000"
          }
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
