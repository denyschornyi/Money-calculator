import React from 'react';

import Total from './components/Total/Total'

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

          <section className="history">

            <h3>Expenses history</h3>

            <ul className="history__list">

                <li className="history__item history__item-plus">Get job paycheck
                    <span className="history__money">+3000 $</span>
                    <button className="history__delete">x</button>
                </li>

                <li className="history__item  history__item-minus">Paid debt
                    <span className="history__money">-1000 $</span>
                    <button className="history__delete">x</button>
                </li>
                
            </ul>

        </section>

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
