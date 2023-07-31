import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../Loading/Loader'
import './CharDetails.css'

function CharDetails() {

  const [details, setDetails] = useState([])
  const [comics,setComics] = useState([])
  const [stories,setStories] = useState([])
  const [loading,setLoading] = useState(true);
  const {characterId} = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(()=>{
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${apiKey}`)
    .then(responses => responses.json())
    .then((con) => {
      setDetails(con.data.results)
      console.log(con);
      setComics(con.data.results[0].comics.items)
      setStories(con.data.results[0].stories.items)
      setLoading(false);
    })
  },[])

  return (
    <>

      {
        loading ? <Loader></Loader>
        :
        <div>
          {
        details.map(detail => {

          var link = detail.thumbnail.path + "." + detail.thumbnail.extension
          const notAvailableSrc = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

          if(link === notAvailableSrc){
            link = "https://i.pinimg.com/736x/0e/3e/4a/0e3e4ad2efbc68906efb76d0b1928fee--marvel.jpg"
          }

          document.title = detail.name

          return(
            <>
              <div className='details-banner' style={{backgroundImage : `url(${link})`}}>
                <div className='details-container'>
                    <h1 className='name'>{detail.name}</h1>
                </div>
              </div>

              <br/>
              <br/>

              <div className='description-con'>
                <h1>DESCRIPTION</h1>
                {
                  (detail.description) || <p style={{color:"#FFFF"}} className='not-fnd'>No Suitable Description Found.</p>
                }
              </div>

              <br/>
              <br/>

              <div className='comics-banner'>
                  <div className='comics-title'>
                    <h1>SOME COMICS THEY APPEAR IN:</h1>
                  </div>
                  <div className='comics-list'>
                    {
                      comics.length === 0 ? <p style={{color:"#FFFF"}} className='not-fnd'>No data available.</p>
                      :
                      comics.map(comic => {
                        return(
                          <div className='comics'>
                            <h1>{comic.name}</h1>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>

              <br/>
              <br/>

              <div className='comics-banner'>
                  <div className='comics-title'>
                    <h1>SOME STORIES THEY APPEAR IN:</h1>
                  </div>
                  <div className='comics-list'>
                    {
                      stories.length === 0 ? <p style={{color:"#FFFF"}} className='not-fnd'>No data available.</p>
                      :
                      stories.map(story => {
                        return(
                          <div className='comics'>
                            <h1>{story.name}</h1>
                          </div>
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
      
    </>
  )
}

export default CharDetails