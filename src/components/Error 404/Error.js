import React from 'react'

import './Error.css'

function Error() {

  document.title = "Error 404"

  return (
    <React.Fragment>
        <section className='error-section'>
            <main className='error-con'>
                <div className='error-txt'>
                    <h1>Mr. Stark couldn't find anything.</h1>
                    <p>This can be due to wrong keyword or the keyword doesn't exist in the API used. Please check the spelling of your keyword.</p>
                    <p>If you're unsure about the spelling. Use the initials , e.g 'Thanos' as 'Th'.</p>
                </div>
            </main>
        </section>
    </React.Fragment>
  )
}

export default Error