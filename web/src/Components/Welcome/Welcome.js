import React from 'react';
import'./welcome.css';

function Welcome() {
  return (
    <div className="main-welcome-container">
        <div className='welcome-mn'>
          
      <div className="welcome-left-container colm">
        <div className='welcome-details-container'>
            <div className='welcome-details-main'>
                <h1 className='welcome-topic'>Saving for your family in an ethical way</h1>
                <p className='welcome-pera'>Al Rayan Bank helps its customers to own their own homes, save for their families' futures and expand their businesses without compromising their faith or their values. This is Neil's story.</p>
            </div>
        </div>
      </div>
      <div className="welcome-right-container colm">
        <div className='welcome-iframe-container'>
        <iframe className='ytifram' src="https://www.youtube.com/embed/TvjU7i-sT_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='res-welcome-details-container'>
            <div className='res-welcome-details-main'>
                <h1 className='res-welcome-topic'>Saving for your family in an ethical way</h1>
                <p className='res-welcome-pera'>Al Rayan Bank helps its customers to own their own homes, save for their families' futures and expand their businesses without compromising their faith or their values. This is Neil's story.</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Welcome
