import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar() {
    const rootPage = '/dnd-friends';
    return (
        <div className='nav'>
            <ul className='nav-row'>
                <Link to={`${rootPage}/`} >Home</Link>
                <Link to={`${rootPage}/Characters`} >Characters</Link>
                <Link to='#' >Current Affairs</Link>
                <Link to='#' > Key NPCs</Link>
                <Link to='#' >Loot Book</Link>
                <Link to={`${rootPage}/KillList`} >Kill List</Link>
                <Link to='#' >Crafting</Link>
                <Link to='#' >Rules FAQ</Link>
                <Link to='#' >Homebrew</Link>
            </ul>
            <div className='dropdown'>
                <FontAwesomeIcon icon={faBars} />
                <ul className='dropdown-content'>
                    <Link to={`${rootPage}/`} >Home</Link>
                    <Link to={`${rootPage}/Characters`} >Characters</Link>
                    <Link to='#' >Current Affairs</Link>
                    <Link to='#' > Key NPCs</Link>
                    <Link to='#' >Loot Book</Link>
                    <Link to={`${rootPage}/KillList`} >Kill List</Link>
                    <Link to='#' >Crafting</Link>
                    <Link to='#' >Rules FAQ</Link>
                    <Link to='#' >Homebrew</Link>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default NavBar;