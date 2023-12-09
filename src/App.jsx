import { useEffect, useState } from 'react'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <section className='header'>
        <div id='header-left'></div>
        <div id='header-center'></div>
        <div id='header-right'>score</div>
      </section>
      <ul className='card-board'>
        {
          Array.from({length: 12}, (_, i) => (
            <li key={i}><Card/></li>
          ))
        }
      </ul>
    </>
  )
}

export default App
