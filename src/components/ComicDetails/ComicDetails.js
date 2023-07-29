
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loading/Loader';
import './ComicDetails.css'

function ComicDetails() {

    const[comicDetails,setComic] = useState([]);
    const[creators,setCreators] = useState([])
    const[comicChars, setComicChars] = useState([])
    const [prices,setPrices] = useState([]);
    const [loading,setLoading] = useState(true);
    const{comicId} = useParams();
    

    useEffect(()=>{
        fetch(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=73e90e2de84ca2d73e9114e7899b2706`)
        .then(response => response.json())
        .then((d) => {
            
            setComic(d.data.results)
            setPrices(d.data.results[0].prices)
            setComicChars(d.data.results[0].characters.items)
            setCreators(d.data.results[0].creators.items)
            setLoading(false);
        })
    },[])

  return (
    <React.Fragment>

    {
        loading ? <Loader></Loader>
        :
        <div>
            {
            comicDetails.map(cDetails => {
                
                var link = cDetails.thumbnail.path + "." + cDetails.thumbnail.extension;
                const notAvailableSrc = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"

                if(link === notAvailableSrc){
                    link = "https://i.pinimg.com/736x/0e/3e/4a/0e3e4ad2efbc68906efb76d0b1928fee--marvel.jpg"
                }

                document.title = cDetails.title;

                return(
                    <>
                        <div className='comic__detail__banner' style={{backgroundImage : `url(${link})`}}>
                            <div className='comic__details__container'>
                                <h1 className='comic__title'>{cDetails.title}</h1>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='comic__description'>
                            <h1>DESCRIPTION</h1>
                            {
                                (cDetails.description || <p>No Suitable Description Found.</p>)
                            }
                        </div>

                        <br/>
                        <br/>

                        <div className='comic__price__con'>
                            <h1>COMIC INFO:</h1>
                            {
                                prices.map(price => {
                                    return(
                                        <>
                                            <p>{price.type} : ${price.price}</p>
                                            <p>ISBN : { (!cDetails.isbn) ? "Not Available" : cDetails.isbn }</p>
                                            <p>FORMAT : {(!cDetails.format) ? "Not Available" : cDetails.format}</p>
                                            <p>UPC : {(!cDetails.upc) ? "Not Available" : cDetails.upc}</p>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <br/>
                        <br/>

                        <div className='characters__involved__banner'>
                            <div className='chrs__title'>
                                <h1>CHARACTERS MENTIONED IN THIS COMIC:</h1>
                            </div>
                        
                            <div className='chr__list'>
                                { 
                                    comicChars.length === 0 ? <p className='not-fnd'>No data available.</p>
                                    :
                                    comicChars.map(chr => {
                                        return(
                                            <>
                                                <p className='chr__name'>{chr.name}</p>
                                            </>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='comics__creators'>
                                <div className='creator__header'>
                                    <h1>CREATED / WRITTEN BY : </h1>
                                </div>

                                <div className='create__list'>
                                    {
                                        creators.length === 0 ? <p className='not-fnd'>No data available.</p>
                                        :
                                        creators.map(creator => {
                                            return (
                                                <>
                                                    <p className='chr__name'>{creator.name}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                        </div>

                        <br/>
                        <br/>
                    </>
                )
            })
        }
        </div>
    }

    </React.Fragment>
  )
}

export default ComicDetails