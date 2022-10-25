import React from 'react'
import './Home.css'

function Home() {

  document.title = "Marvel Fandom | Home"

  return (
    <React.Fragment>
    <section className='hero'>
      <div className='hero-con'>
        <div className='hero-txt-con'>
          <div className='hero-txt-holder'>
            <h1>Dive Into The World Of <span className='iner'>MARVEL</span></h1>
            <p>Learn about your favourite characters and comics.</p>
            <a href='/discover'><button className='hero-btn'>DISCOVER </button></a>
          </div>
        </div>

        <div className='hero-carousel'>
          <img className='hro-img' src='https://tryhardguides.com/wp-content/uploads/2022/04/moon-knight-featured-1024x1024.png' alt="marvel cinematic universe moon-knight"></img>
        </div>

      </div>
    </section>

    <section className='character-section'>
      <div className='character-holder'>
        
        <div className='character-text'>
          <div className='text-holder-char'>
            <h1 className='text-holder-char-h1'>KNOW YOUR HEROES.</h1>
            <p>Explore about 1500+ characters. Learn Everything There Is To Know About Your Favourite Character. Know their origin story, the comics they have appeared in and much more.</p>
            <a href='/characters'><button className='learn-btn'>LEARN MORE</button></a>
          </div>
        </div>
        
      </div>
    </section>

    <section className='comic-section' data-aos = 'fade-up' data-aos-duration="6
    00" data-aos-once='true' data-aos-offset='50'>
      <div className='comic-container'>

        <div className='comic-img'>
          <img src='https://pbs.twimg.com/media/FORs_u6WQAM9jb-.jpg:large' alt='marvel cinematic universe dr strange' className='com-img'></img>
        </div>

        <div className='comic-text'>
          <div className='text-holder'>
            <h1>EXPLORE COMICS</h1>
            <p>With over 1000 comic books. Learn about the marvel comics like never before, get to know the release date, characters involved and stories mentioned. Moreover, get to know the authors of the comic.
              
            </p>
            <a href='/comics'><button className='learn-btn'>LEARN MORE</button></a>
          </div>
        </div>
      </div>
    </section>

    <section className='latest-news' data-aos = 'fade-up' data-aos-duration="700" data-aos-once='true'>
      <div className='latest-news-con'>

        <div className='latest-news-text'>
            <div className='text-holder'>
              <h1>STAY IN TOUCH</h1>
              <p>Stay up-to-date with all thats happening in the Marvel Cinematic Universe. Get to know all the latest announcements and newest inductions to the MCU.</p>
              <a href='/discover'><button className='learn-btn'>LETS GO!</button></a>
            </div>
        </div>

        <div className='latest-news-img'> 
          <img src='https://tryhardguides.com/wp-content/uploads/2021/08/captain-america-featured.png' alt='marvel captain america' className='latest-img'></img>
        </div>

      </div>
    </section>

    </React.Fragment>
  )
}

export default Home