import React from 'react';

import CylinderProgress from './CylinderProgress';

const App = () => {

  return (

    <div className="App">

      <h1>SVG Cylinder Progress Component</h1>

      <CylinderProgress size={300} progress={0.25} name="A" colorDark="#117F00"  colorLight="#11AA00"/>

      <CylinderProgress size={300} progress={0.5} name="B" colorDark="#FF7F00"  colorLight="#FFAA00"/>

      <CylinderProgress size={600} progress={1.0}/>

    </div>

  );

};

export default App;