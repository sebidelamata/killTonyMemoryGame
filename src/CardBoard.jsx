import { useEffect, useState } from 'react';
import Card from './Card.jsx';

const CardBoard = ({game, setGame}) => {

    const [gameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState(false)

    const scanForLoser = () => {
        let valuesArray = Object.values(game.cardsPicked)
        for(let i=0; i<valuesArray.length; i++){
            if(valuesArray[i] > 1){
                setGameOver(true)
                let updatedGame = {
                    ...game,
                    score: 0,
                    cardsPicked: {
                        hinchcliffe: 0,
                        redban: 0,
                        montgomery: 0,
                        lucas: 0,
                        kim: 0,
                        kam: 0,
                        lehrer: 0,
                        cordes: 0,
                        flair: 0,
                        bowling: 0,
                        nathan: 0,
                        tran: 0,
                        philips: 0,
                        hatchett: 0,
                        phil: 0,
                        macovsky: 0,
                        malmud: 0,
                        watkins: 0,
                        falcon: 0
                      }
                }
                setGame(updatedGame)
            }
        }
    }

    const scanForWinner = () => {
        let valuesArray = Object.values(game.cardsPicked)
        for(let i=0; i<valuesArray.length; i++){
            if(valuesArray[i] >= valuesArray.length){
                setWinner(true)
                let updatedGame = {
                    ...game,
                    score: 0,
                    cardsPicked: {
                        hinchcliffe: 0,
                        redban: 0,
                        montgomery: 0,
                        lucas: 0,
                        kim: 0,
                        kam: 0,
                        lehrer: 0,
                        cordes: 0,
                        flair: 0,
                        bowling: 0,
                        nathan: 0,
                        tran: 0,
                        philips: 0,
                        hatchett: 0,
                        phil: 0,
                        macovsky: 0,
                        malmud: 0,
                        watkins: 0,
                        falcon: 0
                      }
                }
                setGame(updatedGame)
            }
        }
    }
    
    // check game over
    useEffect(() => {
        scanForLoser()
        scanForWinner()
    },
    [game]
    )

    //scroll to top on new turn
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [game]); 
    
    return (
        <>
        <ul className='card-board'>
            {
            Array.from({length: 12}, (_, i) => (
                <li key={i}><Card game={game} setGame={setGame}/></li>
            ))
            }
        </ul>
        {
            gameOver === true &&
                <div className='lose-container'>
                    <img id='you-suck' src="./youSuck.gif" alt="You Lose" />
                    <button id='you-lose' onClick={() => setGameOver(false)}>You Lose</button>
                </div>
        }
        {
            winner === true &&
            
                <div className='win-container'>
                    <img id='winner' src="./youWin.gif" alt="You Win" />
                    <button id='you-win' onClick={() => setWinner(false)}>A Golden Ticket Winner Emerges</button>
                </div>
        }
        </>
    )
}

export default CardBoard;