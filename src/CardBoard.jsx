import { useEffect, useState } from 'react';
import Card from './Card.jsx';

const CardBoard = () => {
    return (
        <ul className='card-board'>
            {
            Array.from({length: 12}, (_, i) => (
                <li key={i}><Card/></li>
            ))
            }
        </ul>
    )
}

export default CardBoard;