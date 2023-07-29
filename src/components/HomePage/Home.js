import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import ironManImage from "../../images/wallpaperflare.com_wallpaper (6).jpg"
import thanosImage from "../../images/wallpaperflare.com_wallpaper (3).jpg"
import comicImg from "../../images/wallpaperflare.com_wallpaper (2).jpg"
import Aos from 'aos'

function Home() {

  document.title = "Marvel Fandom | Home"
  
  return (
    <React.Fragment>
      
      <section className='hero'>
        <div className='hero-con'>
            
            <img className='hero-img' src='https://images.hdqwalls.com/download/2016-doctor-strange-movie-new-3840x2160.jpg' loading='lazy'></img>
            
            <div className='hero-txt-con'>
              <div className='hero-txt-holder'>
                <h1>Descend into Marvel's Realm</h1>
                <p>Where Heroes and Villains Collide!</p>
                <p>Immerse Yourself in Marvel's Infinite Universe of Heroes</p>
                <a href='/discover'><button className='hero-btn'>DISCOVER </button></a>
              </div>
            </div>

          </div>
      </section>

      <section className='faction-section'>
        <div className='faction-holder'>
          
          <img className='faction-img' src={ironManImage} loading='lazy'></img>

          <div className='faction-text'>
            <div className='faction-text-holder'>
              <h1>FACTIONS IN MARVEL</h1>
              <p>As one of the most diverse and expansive comic book universes, Marvel is home to numerous factions—teams, alliances, and organizations—that shape the destiny of heroes and villains alike. Dive into our comprehensive database to explore the intricate webs of power, rivalries, and alliances that have defined the Marvel Universe.
                 Avengers, X-Men, Guardians Of The Galaxy just to name a few.
              </p>
              <a href='/factions' ><button className='hero-btn'>CHECK OUT</button></a>
            
            </div>
          </div>
          
        </div>
      </section>

      <section className='character-section' >
        <div className='character-container'>

          <img src={thanosImage} alt='marvel cinematic universe dr strange' className='character-img'></img>

          <div className='character-text'>
            <div className='character-text-holder'>
              <h1>CHOOSE A SIDE</h1>
              <p>
Marvel Comics boasts an extensive roster of iconic characters, from the heroic Spider-Man, Thor, Iron Man, Hulk, and Captain America to the formidable villains like Thanos, Mystique, Green Goblin, Magneto, and Loki. These diverse and compelling characters showcase Marvel's unparalleled storytelling and enduring legacy.
                
              </p>
              <a href='/comics'><button className='hero-btn'>LEARN MORE</button></a>
            </div>
          </div>
        </div>
      </section>

      <section className='comic-section'>
        <div className='comic-con'>

          <img src={comicImg} alt='marvel captain america' className='comic-img'></img>

          <div className='comic-text'>
              <div className='comic-text-holder'>
                <h1>EXPLORE COMICS</h1>
                <p>Discover the Marvel Comics like never before, with a collection exceeding 1000 comic books. Dive into a world of captivating stories and gain insights into release dates, the array of characters involved, and the compelling narratives explored within the pages. Additionally, uncover fascinating details about the talented authors behind these iconic comics.</p>
                <div className='btn-holder'>
                  <a href='/comics'><button className='hero-btn'>EXPLORE</button></a>
                </div>
              </div>
          </div>

        </div>
      </section>

    </React.Fragment>
  )
}

export default Home