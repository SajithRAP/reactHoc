import React from 'react';
import "./App.css"

// import Link from 'react';

import Counter1 from "./Counter1"
import Counter2 from "./Counter2"

// import AclassComponent from "./AclassComponent"
// import AfunctionalComponent from "./AfunctionalComponent"

function App() {
  return (
    <div className="app">
      <h3>A higher-order component transforms a component into another component.</h3>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
