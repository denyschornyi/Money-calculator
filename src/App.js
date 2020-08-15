import React, { Component } from 'react';

import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component{

  state = {
    transaction: []
  }

  addTransaction(add) {
    const transaction = {
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount
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
              <Operation addTransaction={this.addTransaction}/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
