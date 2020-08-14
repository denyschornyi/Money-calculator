import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div className="container">
          <section className="total">
              <header className="total__header">
                  <h3>Баланс</h3>
                  <p className="total__balance">0 ₽</p>
              </header>
              <div className="total__main">
                  <div className="total__main-item total__income">
                      <h4>Доходы</h4>
                      <p className="total__money total__money-income">
                          +0 ₽
                      </p>
                  </div>
                  <div className="total__main-item total__expenses">
                      <h4>Расходы</h4>
                      <p className="total__money total__money-expenses">
                          -0 ₽
                      </p>
                  </div>
              </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
