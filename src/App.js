import React from 'react';

import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

function App() {
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

        <section className="operation">
            <h3>New transaction</h3>
           
            <form id="form">
                <label>
                    <input type="text" className="operation__fields operation__name" placeholder="Operation name" />
                </label>
                <label>
                    <input type="number" className="operation__fields operation__amount" placeholder="Enter amount"/>
                </label>
                
                <div className="operation__btns">
                    <button type="submit" className="operation__btn operation__btn-subtract">EXPENSES</button>
                    <button type="submit" className="operation__btn operation__btn-add">INCOME</button>
                </div>

            </form>
        </section>

        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
