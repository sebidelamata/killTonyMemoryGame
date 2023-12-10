import { useEffect, useState } from 'react';
import Card from './Card.jsx';

const CardBoard = ({game, setGame}) => {
    return (
        <ul className='card-board'>
            {
            Array.from({length: 12}, (_, i) => (
                <li key={i}><Card game={game} seGame={setGame}/></li>
            ))
            }
        </ul>
    )
}

export default CardBoard;