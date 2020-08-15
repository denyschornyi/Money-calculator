import React from 'react';
import HistoryItem from './HistoryItem';

export default function History(){
    return(
        <section className="history">

            <h3>Expenses history</h3>

            <ul className="history__list">
                <HistoryItem/>
            </ul>

         </section>
    );
}