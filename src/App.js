import React, { Component } from 'react';

import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component{

  constructor(){
    super();
    this.state = {
      transaction: [],
      description: '',
      amount: ''
    }
    this.addAmount = this.addAmount.bind(this);
  }

  addTransaction(add) {
    const transaction = {
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount
    }
  }

  addDescription(e){}
  addAmount(e){
    this.setState({amount: e.target.value})
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
              <Operation 
                addTransaction={this.addTransaction}
                addDescription={this.addDescription}
                addAmount={this.addAmount}/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
