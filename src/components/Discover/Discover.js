import React from 'react'
import './Discover.css'

function Discover() {

  document.title = "Discover"

  return (
    <React.Fragment>

        <div className='section-title'>
          <h1>Stay caught up.</h1>
        </div>

        <section className='news'>
          <div className='news-container'>
            <div className='news-card card1'>
              <div className='news-card-text'>
                <p>Ms. Marvel becomes Marvel's highest rated show.</p>
              </div>
            </div>

            <div className='news-card card2'>
              <div className='news-card-text'>
                  <p>Fantastic 4 announced!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='news' data-aos='fade-left' data-aos-duration="700" data-aos-once='true'>
          <div className='news-container'>
            <div className='news-card card3'>
              <div className='news-card-text'>
                <p>Secret Invasion series to come out in 2023.</p>
              </div>
            </div>

            <div className='news-card card4'>
              <div className='news-card-text'>
                  <p>New trailer gives a glimpse of Daredevil.</p>
              </div>
            </div>
          </div>
        </section>

        <div className='trailer-title'>
          <h1>WATCH: "I am Groot" Trailer!</h1>
        </div>

        <section className='trailer-section' data-aos='fade-up' data-aos-duration="700" data-aos-once='true'>
          <div className='trailer-con'>
          <iframe className="trailer-iframe" width="725" height="400" src="https://www.youtube.com/embed/D7eFpRf4tac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"></iframe>
          </div>
        </section>
    </React.Fragment>
  )
}

export default Discover