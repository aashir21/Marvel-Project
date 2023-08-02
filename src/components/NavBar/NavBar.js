import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

function NavBar() {

    const links = document.querySelectorAll(".nav-links")

    links.forEach((link) => {
        link.addEventListener("click", () =>{
            document.querySelector('.active')?.classList.remove('active')
            link.classList.add('active')
        })
    })

    const handleExpand = () => {
        const btn = document.querySelector(".expanded-menu")
        btn.classList.toggle("menu-active")
    }


  return (

    <>
        <header className='navbar'>
            <div className='wrapper'>

                <div className='links'>
                    <Link to="/" className='label-link'>
                        <svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" height="72" width="72" viewBox="-28.6146 -55.69225 247.9932 334.1535"><path d="M91.256 43.595c-42.332 2.172-75.995 37.577-75.995 80.931 0 14.627 3.832 28.349 10.535 40.195l-8.118 15.765C6.548 164.704 0 145.388 0 124.526c0-53.278 42.704-96.473 95.382-96.473.753 0 1.504.009 2.252.026L111.412 0h29.434v39.696c29.733 16.337 49.918 48.2 49.918 84.829 0 53.279-42.704 96.473-95.382 96.473-16.079 0-31.229-4.024-44.519-11.132l6.712-13.875c11.262 6.107 24.134 9.571 37.807 9.571 44.249 0 80.121-36.282 80.121-81.037 0-27.971-14.013-52.633-35.325-67.197v76.695l-26.897-25.442V50.453l-33.218 78.891h33.218V116.68l31.141 29.274-32.179 24.705V157.58H68.437l-28.855 65.189-35.708-.699z" fill="#fff"/><path fill="#fff" d="M140.125 179.637H112.21l27.915-23.914z"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M91.256 43.595c-42.332 2.172-75.995 37.577-75.995 80.931 0 14.627 3.832 28.349 10.535 40.195l-8.118 15.765C6.548 164.704 0 145.388 0 124.526c0-53.278 42.704-96.473 95.382-96.473.753 0 1.504.009 2.252.026L111.412 0h29.434v39.696c29.733 16.337 49.918 48.2 49.918 84.829 0 53.279-42.704 96.473-95.382 96.473-16.079 0-31.229-4.024-44.519-11.132l6.712-13.875c11.262 6.107 24.134 9.571 37.807 9.571 44.249 0 80.121-36.282 80.121-81.037 0-27.971-14.013-52.633-35.325-67.197v76.695l-26.897-25.442V50.453l-33.218 78.891h33.218V116.68l31.141 29.274-32.179 24.705V157.58H68.437l-28.855 65.189-35.708-.699z" fill="#fff"/>
                            <path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M140.125 179.637H112.21l27.915-23.914z"/>
                        </svg>
                    </Link>
                    <ul>
                        <Link to="/factions" className='nav-links'>
                            <h1>Factions</h1>
                        </Link>

                        <Link to="/characters" className='nav-links'>
                            <h1>Characters</h1>
                        </Link>
                        <Link to="/comics" className='nav-links'>
                            <h1>Comics</h1>
                        </Link>

                    </ul>
                </div>
                    
                
                <svg onClick={handleExpand} className='hamburger-btn' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 14" id="menu"><g fill="none" fill-rule="evenodd" stroke="#FFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><path d="M0 6h18M0 0h18M0 12h18"></path></g></svg>


                <div className='srch'>
                    <SearchForm></SearchForm>
                </div>

            </div>

            <div className='expanded-menu'>
                <div className='expanded-links'>
                    <ul>
                        <Link to="/factions" className='expanded-nav-links'>
                            <h1>Factions</h1>
                        </Link>

                        <Link to="/characters" className='expanded-nav-links'>
                            <h1>Characters</h1>
                        </Link>
                        <Link to="/comics" className='expanded-nav-links'>
                            <h1>Comics</h1>
                        </Link>

                    </ul>
                </div>
            </div>

        </header>
    
    </>


  )
}

export default NavBar