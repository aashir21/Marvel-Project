import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

function NavBar() {

    const openSidebar = ()=>{
        
        const sideBar = document.querySelector(".sidebar")
        
        sideBar.classList.toggle("show-sidebar")

    }

  return (

    <>
        <div className='navbar'>
            <Link to="/" className='label-link'>
                <label>MARVEL</label>
            </Link>
            <SearchForm></SearchForm>
            
            <svg className='toggle-btn' onClick={openSidebar} width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm0 8h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm0-4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"></path>
            </svg>

        </div>
        <div className='sidebar'>
            <div className='links-container'>
                <ul className='links'>
                    <Link className='label-link' to='/discover'><li>Discover</li></Link>
                    <Link className='label-link' to="/characters"><li>Characters</li></Link>
                    <Link className='label-link' to='/comics'><li>Comics</li></Link>
                </ul>
            </div>
        </div>
    </>


  )
}

export default NavBar