import React from 'react'

import './Loader.css'

function Loader() {
  return (
    <React.Fragment>
        <div className='loader'>
            <div className='loader-con'>
                <img src='https://uploads.scratch.mit.edu/users/avatars/53349254.png' alt='loading gif of iron man flying off'></img>
                <p>Hold On! Mr. Stark is on his way!</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Loader