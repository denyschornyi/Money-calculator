import React from 'react';

export default function Operation(){
    return(
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
    );
}