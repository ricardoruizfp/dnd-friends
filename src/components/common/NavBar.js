import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <Link to='/' >Home</Link>
                <Link to='/Characters' >Characters</Link>
                <Link to='#' >Current Affairs</Link>
                <Link to='#' > Key NPCs</Link>
                <Link to='#' >Loot Book</Link>
                <Link to='#' >Kill List</Link>
                <Link to='#' >Crafting</Link>
                <Link to='#' >Rules FAQ</Link>
                <Link to='#' >Homebrew</Link>
            </ul>
            <hr />
        </div>
    )
}

export default NavBar;