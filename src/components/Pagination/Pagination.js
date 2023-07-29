
import React, {useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import '../Characters/Characters.css'
import Loader from '../Loading/Loader';

function Pagination() {

    const [hero,setHero] = useState([]);
    const {pageNumber} = useParams();
    const [loading,setLoading] = useState(true);

    var offset = (pageNumber-1) * 100;

    useEffect(()=>{
        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${offset}&apikey=73e90e2de84ca2d73e9114e7899b2706`)
        .then(res => res.json())
        .then((content) => {
          setHero(content.data.results);
          setLoading(false);
        })
    },[])

  return (

    <React.Fragment>
        
        {
          loading ? <Loader></Loader>
          :
          <div>
            <div className='char-banner'>
            <div className='title'>
              <h1>CHARACTERS</h1>
            </div>
            <div className='char-container'>
              {
                hero.map((heros) =>{

                  const notAvailableSrc = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
                  var availableSrc = heros.thumbnail.path + "." + heros.thumbnail.extension
                  if(availableSrc === notAvailableSrc){
                    availableSrc = "https://i.pinimg.com/736x/0e/3e/4a/0e3e4ad2efbc68906efb76d0b1928fee--marvel.jpg"
                  }

                  return(
                    <Link className='card-link' to={`/chardetails/${heros.id}`}>
                      <div className='card' key={heros.id}>
                        <div className='card-img'>
                          <img src={availableSrc} alt="character-img"></img>
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

export default Pagination