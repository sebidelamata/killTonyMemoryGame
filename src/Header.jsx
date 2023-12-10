import { useEffect, useState } from 'react'

const Header = ({game, setGame}) => {
    return (
        <section className='header'>
            <div id='header-left'></div>
            <div id='header-center'>
                <img id='header-logo' src="./kill_tony_logo.jpeg" alt="Kill Tony Logo" />
            </div>
            <div id='header-right'>
                <div id='score'>{`Score: ${game.score}`}</div>
                <div id='high-score'>{`High Score: ${game.highScore}`}</div>
            </div>
        </section>
    )
}

export default Header;
