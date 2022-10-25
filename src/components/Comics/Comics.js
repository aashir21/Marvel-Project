import React, {useEffect,useState} from 'react'
import './Comics.css'
import {Link} from 'react-router-dom'
import Loader from '../Loading/Loader';

function Comics() {

    const [comicList,setComicList] = useState([])
    const [loading,setLoading] = useState(true);

    

    useEffect(()=>{
        fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=100&offset=0&apikey=73e90e2de84ca2d73e9114e7899b2706`)
        .then(response => response.json())
        .then((data) => {
            setComicList(data.data.results)
            setLoading(false);
        })
    },[])

    document.title = "Comics"

  return (
    <React.Fragment>
        {
            loading ? <Loader></Loader>
            :
            <div>
                <div className='comic-hero'>
            <div className='comic__container'>
                <h1>COMICS</h1>
            </div>
        </div>

        <div className='comic__banner'>
            <div className='title'>
                <h1>COMIC BOOKS</h1>
            </div>

            <div className='comic__container'>
                {
                    comicList.map((com)=>{
                        return(
                            <Link to={`/comicdetails/${com.id}/${com.title}`} style={{textDecoration:'none'}}>
                                <div className='comic__card' key={com.id}>
                                    <div className='comic__card__img'>
                                        <img src={com.thumbnail.path + "." + com.thumbnail.extension}></img>
                                    </div>
                                    <div className='comic__card__text'>
                                        <p>{com.title}</p>
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
                <a href={`/coms/${1}`}><button className='page-btn' to='/chars/1'>1</button></a>
                <a href={`/coms/${2}`}><button className='page-btn' to='/chars/2'>2</button></a>
                <a href={`/coms/${3}`}><button className='page-btn' to='/chars/3'>3</button></a>
                <a href={`/coms/${4}`}><button className='page-btn' to='/chars/4'>4</button></a>
                <a href={`/coms/${5}`}><button className='page-btn' to='/chars/5'>5</button></a>
                <a href={`/coms/${6}`}><button className='page-btn' to='/chars/6'>6</button></a>
                <a href={`/coms/${7}`}><button className='page-btn' to='/chars/7'>7</button></a>
                <a href={`/coms/${8}`}><button className='page-btn' to='/chars/8'>8</button></a>
                <a href={`/coms/${9}`}><button className='page-btn' to='/chars/9'>9</button></a>
                <a href={`/coms/${10}`}><button className='page-btn' to='/chars/10'>10</button></a>
            </span>
        </div>
            </div>

        }
    </React.Fragment>
  )
}

export default Comics