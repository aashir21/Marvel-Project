import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <React.Fragment>
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-text'>

                    <div className='footer-label'>
                        <label className='footer-label-title'>MARVEL</label>
                    </div>

                    <ul>
                        <a href='/'><li>Home</li></a>
                        <a href='/discover'><li>Discover</li></a>
                        <a href='/characters'><li>Characters</li></a>
                        <a href='/comics'><li>Comics</li></a>
                    </ul>

                    {/* <h3>Project by <span className='company-name'>AshTech</span></h3> */}

                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer