import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import CardBoard from './CardBoard.jsx'

function App() {

  const [game, setGame] = useState({
    score: 0,
    highScore: 0,
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
  })

  return (
    <>
      <Header game={game} seGame={setGame}/>
      <CardBoard game={game} seGame={setGame}/>
    </>
  )
}

export default App
