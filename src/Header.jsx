import { useEffect, useState } from 'react'

const Header = () => {
    return (
        <section className='header'>
            <div id='header-left'></div>
            <div id='header-center'>
                <img id='header-logo' src="./kill_tony_logo.jpeg" alt="Kill Tony Logo" />
            </div>
            <div id='header-right'>score</div>
        </section>
    )
}

export default Header;
