
import React, {useState,useEffect} from 'react'
import './Characters.css'
import {Link} from 'react-router-dom'
import Loader from '../Loading/Loader';

function Characters() {

  const [hero,setHero] = useState([]);
  const [loading,setLoading] = useState(true);
  document.title = "Characters"

  

  useEffect(()=>{
    fetch("https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=0&apikey=73e90e2de84ca2d73e9114e7899b2706")
    .then(res => res.json())
    .then((content) => {
      setHero(content.data.results)
      setLoading(false)
    })
    
  },[])

  
  return (
    <React.Fragment>
        
        {
          loading ? <Loader></Loader>
          :
          <div>
              <div className='hero-banner'>
          <div className='hero-container'>
            <h1>HEROES & <span>VILLAINS</span></h1>
          </div>
        </div>

        <div className='char-banner'>
            <div className='title'>
              <h1>CHARACTERS</h1>
            </div>
            <div className='char-container'>
              {
                hero.map((heros) =>{
                  return(
                    <Link className='card-link' to={`/chardetails/${heros.id}`}>
                      <div className='card' key={heros.id}>
                        <div className='card-img'>
                          <img src={heros.thumbnail.path + "." + heros.thumbnail.extension} alt="character-img"></img>
                        </div>
                        <div className='card-text'>
                          <p>{heros.name}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
        </div>

        <div className='btn-holder'>
              <span>
                <a href={`/chars/${1}`}><button className='page-btn' to='/chars/1'>1</button></a>
                <a href={`/chars/${2}`}><button className='page-btn' to='/chars/2'>2</button></a>
                <a href={`/chars/${3}`}><button className='page-btn' to='/chars/3'>3</button></a>
                <a href={`/chars/${4}`}><button className='page-btn' to='/chars/4'>4</button></a>
                <a href={`/chars/${5}`}><button className='page-btn' to='/chars/5'>5</button></a>
                <a href={`/chars/${6}`}><button className='page-btn' to='/chars/6'>6</button></a>
                <a href={`/chars/${7}`}><button className='page-btn' to='/chars/7'>7</button></a>
                <a href={`/chars/${8}`}><button className='page-btn' to='/chars/8'>8</button></a>
                <a href={`/chars/${9}`}><button className='page-btn' to='/chars/9'>9</button></a>
                <a href={`/chars/${10}`}><button className='page-btn' to='/chars/10'>10</button></a>
                <a href={`/chars/${11}`}><button className='page-btn' to='/chars/11'>11</button></a>
                <a href={`/chars/${12}`}><button className='page-btn' to='/chars/12'>12</button></a>
                <a href={`/chars/${13}`}><button className='page-btn' to='/chars/13'>13</button></a>
                <a href={`/chars/${14}`}><button className='page-btn' to='/chars/14'>14</button></a>
                <a href={`/chars/${15}`}><button className='page-btn' to='/chars/15'>15</button></a>
                <a href={`/chars/${16}`}><button className='page-btn' to='/chars/16'>16</button></a>

              </span>
          </div>
        </div>
        }

    </React.Fragment>
  )
}

export default Characters