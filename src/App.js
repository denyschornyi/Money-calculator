import React, { Component } from 'react';

import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component{

  state = {
    transaction: []
  }

  addTransaction() {
    const transaction = {
      id: `cmr${(+new Date).toString(16)}`,
      description: '',
      amount: ' '
    }
  }

  render(){
    return (
      <React.Fragment>
        <header>
          <h1>Wallet</h1>
          <h2>Cost calculator</h2>
        </header>
  
        <main>
          <div className="container">
              <Total />
              <History/>
              <Operation/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
