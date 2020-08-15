import React from 'react';

export default function HistoryItem(){
    return(
        <li className="history__item history__item-plus">Get job paycheck
                <span className="history__money">+3000 $</span>
                <button className="history__delete">x</button>
        </li>
    );
}


/* <li className="history__item  history__item-minus">Paid debt
    <span className="history__money">-1000 $</span>
    <button className="history__delete">x</button>
</li> */