
import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import Error from '../Error 404/Error'
import Loader from '../Loading/Loader'

import './SearchResult.css'

function SearchResult() {

    const[searchComics,setSearchComics] = useState([])
    const[searchCharacters, setSearchCharacters] = useState([])
    const[loading,setLoading] = useState(true);
    const {searchString} = useParams();

    useEffect(()=>{
        fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchString}&limit=100&offset=0&apikey=73e90e2de84ca2d73e9114e7899b2706`)
        .then(resp => resp.json())
        .then((content) =>{
            setSearchCharacters(content.data.results)
            setLoading(false);
        })
    },[searchString,loading])

    useEffect(()=>{
        fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchString}&limit=100&offset=0&apikey=73e90e2de84ca2d73e9114e7899b2706`)
        .then(response => response.json())
        .then((data) => {
            setSearchComics(data.data.results);
            setLoading(false);
        })
    },[searchString,loading])

    document.title = `Showing Search Results For: ${searchString}`
    

  return (
    <React.Fragment>
        
        {
            loading ? <Loader></Loader>
            :
            <div>
                {
                (searchCharacters.length === 0) ?  (<Error></Error>)
                :
                <div className='search__banner'>
                    <div className='search__container'>
                        {
                            searchCharacters.map((characters) => {

                                return (
                                    <Link className='card-link' to={`/chardetails/${characters.id}`}>
                                        <div className='search__card' key={characters.id}>
                                            <div className='search__card__img'>
                                                <img src={characters.thumbnail.path + "." + characters.thumbnail.extension} alt='char-img' loading="lazy"></img>
                                            </div>
                                            <div className='search__card__text'>
                                                <p>{characters.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                        {
                            searchComics.map((comics) => {

                                return (
                                    <Link className='card-link' to={`/comicdetails/${comics.id}/${comics.title}`}>
                                        <div className='search__card' key={comics.id}>
                                            <div className='search__card__img'>
                                                <img src={comics.thumbnail.path + "." + comics.thumbnail.extension} alt='char-img' loading="lazy"></img>
                                            </div>
                                            <div className='search__card__comic__text'>
                                                <p>{comics.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            }
            </div>
        }
        
    </React.Fragment>
  )
}

export default SearchResult