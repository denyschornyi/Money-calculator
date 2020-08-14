import React from 'react';

function Test(){
  return React.createElement('button', null, 'Hello world');
}

function App() {
  return (
    <Test/>
  );
}

export default App;
